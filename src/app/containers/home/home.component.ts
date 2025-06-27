import { Component, ViewEncapsulation } from '@angular/core';
import { JsonResultComponent } from '../../components/json-result/json-result.component';
import { TerminalComponent } from '../../components/terminal/terminal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TerminalComponent, JsonResultComponent]
})
export class HomeComponent {
  public currentCommand: string = 'presentation';

  public updateCurrentCommand(command: string): void {
    this.currentCommand = command;
  }
}
