import { Component } from '@angular/core';
import { timelineItems } from './timeline.data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  public _timelineItems = timelineItems;
}
