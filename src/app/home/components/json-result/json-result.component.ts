import { Component, Input, ViewEncapsulation } from '@angular/core';

import { resultData } from '../../data';

@Component({
  selector: 'app-json-result',
  templateUrl: './json-result.component.html',
  styleUrls: ['./json-result.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JsonResultComponent {
  @Input() currentCommand: string;

  private _previousJsonCommandWorking = null;

  private _getCurrentCommandKey(command?) {
    if (!command) {
      command = this.currentCommand;
    }

    return Object.keys(resultData)
      .map((key) => key)
      .find((key) => {
        if (key === command) {
          return true;
        }

        const splitKey = key.split('/');
        return splitKey.find((keyPart) => keyPart === command);
      });
  }

  public getJsonResult() {
    let response =
      '<pre class="code-block"><code class="code"><span class="code-line">{</span>';

    const result = resultData[this._getCurrentCommandKey()];

    const data = result
      ? result.data
      : resultData[this._getCurrentCommandKey(this._previousJsonCommandWorking)]
          .data;

    this._previousJsonCommandWorking = this.currentCommand;

    Object.keys(data).forEach((key) => {
      response += '<br />';

      if (typeof data[key] === 'string') {
        response += `<span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">${key}</span><span class="code-hidden">"</span>: "<span class="code-value" itemprop="name">${data[key]}</span>",</span>`;
      } else if (typeof data[key] === 'number') {
        response += `<span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">${key}</span><span class="code-hidden">"</span>: <span class="code-value code-number" itemprop="name">${data[key]}</span>,</span>`;
      } else if (typeof data[key] === 'boolean') {
        response += `<span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">${key}</span><span class="code-hidden">"</span>: <span class="code-value code-boolean" itemprop="name">${data[key]}</span>,</span>`;
      } else if (Array.isArray(data[key])) {
        response += `<span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">${key}</span><span class="code-hidden">"</span>: [`;

        data[key].forEach((element, i) => {
          if (i !== 0) {
            response += ',';
          }

          response += `<br />  "<span class="code-value">${element}</span>"`;
        });

        response += `<br />],</span>`;
      } else if (typeof data[key] === 'object') {
        response += `<span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">experience</span><span class="code-hidden">"</span>: {</span>`;

        Object.keys(data[key]).forEach((keyElement, j) => {
          if (j !== 0) {
            response += ',';
          }

          response += `<br /><span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">${keyElement}</span>": "<span class="code-value">${data[key][keyElement]}</span>"</span>`;
        });

        response +=
          '<br /><span class="code-line"><span class="code-space">  </span>},</span>';
      }
    });

    response += '<br /><span class="code-line">}</span></code></pre>';
    return response;
  }
}
