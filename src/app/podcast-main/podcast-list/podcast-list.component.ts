import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PodcastMainService } from '../podcast-main.service';
import { PodcasterItem } from '../../core/classes/PodcasterItem';
import { UserLoadingNotifyService } from '../../core/user-loading-notify.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html'
})

export class PodcastListComponent implements OnInit {

  @Input() term: any;

  podcaster: PodcasterItem[];

  constructor(
    private title: Title,
    private podcastMainService: PodcastMainService,
    private userLoadingNotifyService: UserLoadingNotifyService) {
  }

  ngOnInit() {
    this.title.setTitle('Podcaster');
    this.userLoadingNotifyService.startLoading();
    this.getPodcaster();
  }

  getPodcaster() {
    this.podcastMainService.getPodcaster()
    .then(result => {
      this.podcaster = result;
      this.userLoadingNotifyService.stopLoading();
    })
    .catch(erro => console.log(erro));
  }

}
