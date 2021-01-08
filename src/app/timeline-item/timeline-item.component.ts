import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public isJob: boolean;
  @Input() public isLeft: boolean;

  public get _icon() {
    return this.isJob ? 'fi-torso-business' : 'fi-book';
  }
}
