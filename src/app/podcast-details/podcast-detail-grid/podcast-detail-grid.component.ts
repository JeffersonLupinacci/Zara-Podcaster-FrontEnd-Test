import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { PodcastRSS } from '../../core/classes/PodcastRSS';

@Component({
  selector: 'app-podcast-detail-grid',
  templateUrl: './podcast-detail-grid.component.html',
  styleUrls: ['./podcast-detail-grid.component.css']
})
export class PodcastDetailGridComponent {

  @Input() podcastRSS: PodcastRSS;

}
