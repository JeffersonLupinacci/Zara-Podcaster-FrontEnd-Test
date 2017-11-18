import { Component, Input } from '@angular/core';

import { PodcastRSS } from '../../core/classes/PodcastRSS';
import { PodcastApple } from '../../core/classes/PodcastApple';

@Component({
  selector: 'app-podcast-detail-summary',
  templateUrl: './podcast-detail-summary.component.html',
  styleUrls: ['./podcast-detail-summary.component.css']
})
export class PodcastDetailSummaryComponent {

  @Input() podcastRSS: PodcastRSS;
  @Input() podcastApple: PodcastApple;

}
