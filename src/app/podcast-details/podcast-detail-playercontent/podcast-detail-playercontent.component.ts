import { Component, Input } from '@angular/core';
import { EpisodeRSS } from '../../core/classes/EpisodeRSS';

@Component({
  selector: 'app-podcast-detail-playercontent',
  templateUrl: './podcast-detail-playercontent.component.html'
})
export class PodcastDetailPlayercontentComponent {

  @Input() episodeRSS: EpisodeRSS;

}
