import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { commands } from '../../commands';

import { resultData } from '../../data';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TerminalComponent implements OnInit {
  @Output() updateCurrentCommand = new EventEmitter();
  @Input() currentCommand: string;

  public commandsList = [];
  public customCommands = ['help', 'clear'];
  public hiddenCommands = [];
  public commandsHistory = [];
  public historyMode = false;
  public historyIndex = -1;
  public terminalBody = null;
  public value = '';

  public ngOnInit(): void {
    this.initTerminal();
  }

  public initTerminal() {
    this.terminalBody = document.querySelector('.terminal__body');
    this._clearTerminal();

    commands.forEach((c) => {
      this.commandsList.push(c.command);
    });

    document.querySelector('body').addEventListener('click', () => {
      const inputs = document.querySelectorAll('input');
      const lastInput: any = inputs.length < 1 ? '' : inputs[inputs.length - 1];
      lastInput.focus();
    });

    // Commandes qui nécessitent un traitement JS
    this.commandsList = this.commandsList.concat(this.customCommands);

    this.addNewLine();
  }

  public handleCustomCommands(command) {
    switch (command) {
      case 'clear':
        this._clearTerminal();
        return;
      case 'help':
        return Object.keys(resultData).reduce((acc, item) => {
          const splitItem = item.split('/')[0];
          return `${acc}<p><code>${splitItem}</code>: ${resultData[item].description}</p>`;
        }, '');
    }
  }

  private _clearTerminal() {
    this.terminalBody.innerHTML = `
          <div class="terminal__banner">
            <div class="terminal__author">Guillaume BARRANCO</div>
            <p>
              Bienvenue sur mon site web ! Pour afficher les commandes disponibles
              tapez
              <code>help</code>. Pour valider chaque commande appuyez sur
              <em>Entrer</em>, vous pouvez utiliser la touche
              <em>Tabulation</em> afin de vous aider à compléter une commande.
              <br /><br />
              Vous préférez un site web présentant mon parcours en format non geek,
              tapez <code>notgeek</code>
            </p>

            <div id="terminal"></div>
          </div>`;
  }

  public getDomForCommand(command) {
    const commandObj: any = commands.find((el) => el.command === command);

    let html: any = '';
    if (commandObj === undefined) {
      html = `'${
        command.split(' ')[0]
      }' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.`;
    } else {
      if (
        commandObj.responseType === 'list' &&
        Array.isArray(commandObj.value)
      ) {
        html = '<ul>';
        html += commandObj.value.map((s) => `<li>${s}</li>`).join('');
        html += '</ul>';
      } else if (commandObj.responseType === 'text') {
        html = commandObj.value;
      } else if (commandObj.responseType === 'table') {
        const headers = commandObj.headers;
        const rows = commandObj.rows;
        const thsHtml = headers.map((h) => `<th>${h}</th>`).join('');
        const tdsHtml = rows
          .map((r) => `<tr>${r.map((rtd) => `<td>${rtd}</td>`).join('')}</tr>`)
          .join('');
        html = `<table><thead><tr>${thsHtml}</tr></thead><tbody>${tdsHtml}</tbody></table>`;
      } else if (commandObj.responseType === 'code') {
        html = `<pre>${commandObj.value.join('\n')}</pre>`;
      }
    }

    return html;
  }

  public onCommandInput(e) {
    const commandValue = e.target.value.trim().toLowerCase();
    if (e.keyCode === 13) {
      // ENTER

      if (commandValue !== '') {
        this.updateCurrentCommand.emit(commandValue);
        this.historyMode = false;
        const idResponse = `response-${e.target.dataset.uid}`;
        const responseEl = document.getElementById(idResponse);
        let html;
        if (
          this.hiddenCommands.includes(commandValue) ||
          this.customCommands.includes(commandValue)
        ) {
          html = this.handleCustomCommands(commandValue);
        } else {
          html = this.getDomForCommand(commandValue);
        }
        if (responseEl) {
          responseEl.innerHTML = html;
          this.commandsHistory.push(commandValue);
          this.addNewLine(e.target.id);
        }
      }
    } else if (e.keyCode === 9) {
      // TAB
      e.preventDefault();
      if (commandValue === '') {
        this.value = 'help';
      } else {
        const matchingCommand = this.commandsList.find((c) =>
          c.startsWith(commandValue)
        );
        if (matchingCommand) {
          this.value = matchingCommand;
        }
      }
      this.historyMode = false;
    } else if (e.keyCode === 38 || e.keyCode === 40) {
      // UP / DOWN
      // Gestion de l'historique
      if (this.commandsHistory.length > 0) {
        if (this.historyMode === false) {
          this.historyIndex = this.commandsHistory.length - 1;
        } else {
          if (e.keyCode === 38 && this.historyIndex !== 0) {
            // UP
            this.historyIndex--;
          } else if (
            e.keyCode === 40 &&
            this.historyIndex !== this.commandsHistory.length - 1
          ) {
            this.historyIndex++;
          }
        }
        this.value = this.commandsHistory[this.historyIndex];
      }
      this.historyMode = true;
    }
  }

  public addNewLine(previousUid = null) {
    const uid = Math.random().toString(36).replace('0.', '');
    // terminal__line
    const terminalLineEl = document.createElement('div');
    terminalLineEl.classList.add('terminal__line');

    // terminal__response
    const terminalResponseEl = document.createElement('div');
    terminalResponseEl.classList.add('terminal__response');
    terminalResponseEl.id = `response-${uid}`;

    // input text
    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.id = `input-${uid}`;
    inputEl.autocapitalize = 'off';
    inputEl.dataset.uid = uid;
    inputEl.dataset.active = '1'; // Utile pour le focus
    inputEl.addEventListener('keydown', (e) => {
      this.onCommandInput(e);
    });

    terminalLineEl.appendChild(inputEl);
    if (previousUid) {
      const previousInputEl = document.getElementById(previousUid);
      if (previousInputEl) {
        previousInputEl.setAttribute('disabled', 'true');
        previousInputEl.removeEventListener('keydown', (e) => {
          this.onCommandInput(e);
        });
        delete previousInputEl.dataset.active;
      }
    }
    document.getElementById('terminal').appendChild(terminalLineEl);
    document.getElementById('terminal').appendChild(terminalResponseEl);

    inputEl.focus(); // Ajoute le focus dès la création du champs
  }

  public inputListener() {
    document.body.addEventListener('click', (e: any) => {
      if (e.target.tagName !== 'INPUT') {
        const activeInput: any = document.querySelector('input[data-active]');
        activeInput.focus();
      }
    });
  }
}
