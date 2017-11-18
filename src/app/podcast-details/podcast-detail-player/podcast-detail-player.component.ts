import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PodcastApple } from '../../core/classes/PodcastApple';
import { PodcastRSS } from '../../core/classes/PodcastRSS';
import { EpisodeRSS } from '../../core/classes/EpisodeRSS';
import { PodcastDetailsService } from '../podcast-details.service';
import { UserLoadingNotifyService } from '../../core/user-loading-notify.service';

@Component({
  selector: 'app-podcast-detail-player',
  templateUrl: './podcast-detail-player.component.html'
})
export class PodcastDetailPlayerComponent implements OnInit {

  podcastApple: PodcastApple = null;
  podcastRSS: PodcastRSS = null;
  episodeRSS: EpisodeRSS = null;

  episodeId = null;
  podcastId = null;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private podcastDetailsService: PodcastDetailsService,
    private userLoadingNotifyService: UserLoadingNotifyService) {
  }

  ngOnInit() {
    this.userLoadingNotifyService.startLoading();
    this.title.setTitle('Podcaster');
    this.episodeId = this.route.snapshot.params['episodeId'];
    this.podcastId = this.route.snapshot.params['podcastId'];
    this.getPodcastApple(this.podcastId);
  }

  getPodcastApple(podcastId: string) {
    this.podcastDetailsService.getPodcastApple(podcastId)
    .then(result => {
      this.podcastApple = result;
      this.getPodcastRSS(this.podcastApple.feedUrl);
    })
    .catch(erro => console.log(erro));
  }

  getPodcastRSS(feedUrl: string) {
    this.podcastDetailsService.getPodcastRSS(this.podcastId, feedUrl)
    .then(result => {
      this.podcastRSS = result;
      if (null != this.episodeId) {
        // tslint:disable-next-line:triple-equals
        this.episodeRSS = result.tracks.filter(x => x.id == this.episodeId)[0];
        this.userLoadingNotifyService.stopLoading();
      }

    })
    .catch(erro => console.log(erro));
  }

}
