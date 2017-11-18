import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { PodcastDetailsService } from '../podcast-details.service';

import { PodcastApple } from '../../core/classes/PodcastApple';
import { PodcastRSS } from '../../core/classes/PodcastRSS';
import { UserLoadingNotifyService } from '../../core/user-loading-notify.service';

@Component({
  selector: 'app-podcast-detail-main',
  templateUrl: './podcast-detail-main.component.html'
})
export class PodcastDetailMainComponent implements OnInit {

  podcastApple: PodcastApple = null;
  podcastRSS: PodcastRSS = null;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private podcastDetailsService: PodcastDetailsService,
    private userLoadingNotifyService: UserLoadingNotifyService) {
  }

  ngOnInit() {
    this.userLoadingNotifyService.startLoading();
    this.getPodcastApple(this.route.snapshot.params['podcastId']);
  }

  getPodcastApple(podcastId: string) {
    this.podcastDetailsService.getPodcastApple(podcastId)
    .then(result => {
      this.podcastApple = result;
      this.getPodcastRSS(podcastId, this.podcastApple.feedUrl);
    })
    .catch(erro => console.log(erro));
  }

  getPodcastRSS(podcastId: string, feedUrl: string) {
    this.podcastDetailsService.getPodcastRSS(podcastId, feedUrl)
    .then(result => {
      this.podcastRSS = result;
      if (null != this.podcastRSS) {
        this.title.setTitle('Podcaster - ' + this.podcastRSS.title);
      }
      this.userLoadingNotifyService.stopLoading();
    })
    .catch(erro => console.log(erro));
  }
}
