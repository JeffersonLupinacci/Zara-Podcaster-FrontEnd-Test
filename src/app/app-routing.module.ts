import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { PodcastListComponent } from './podcast-main/podcast-list/podcast-list.component';
import { PodcastDetailMainComponent } from './podcast-details/podcast-detail-main/podcast-detail-main.component';
import { PodcastDetailPlayerComponent } from './podcast-details/podcast-detail-player/podcast-detail-player.component';

const routes: Routes = [
  {
    path: '',
    component: PodcastListComponent,
  },
  {
    path: 'podcast/:podcastId',
    component: PodcastDetailMainComponent,
  },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    component: PodcastDetailPlayerComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
