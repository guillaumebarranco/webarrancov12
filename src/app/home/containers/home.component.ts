import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public currentCommand: string = 'presentation';

  public updateCurrentCommand(command: string): void {
    this.currentCommand = command;
  }
}
