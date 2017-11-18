import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';

import { PodcastDetailsService } from './podcast-details.service';
import { PodcastDetailMainComponent } from './podcast-detail-main/podcast-detail-main.component';
import { PodcastDetailPlayerComponent } from './podcast-detail-player/podcast-detail-player.component';
import { PodcastDetailSummaryComponent } from './podcast-detail-summary/podcast-detail-summary.component';
import { PodcastDetailGridComponent } from './podcast-detail-grid/podcast-detail-grid.component';
import { MinuteSecondsPipe } from './minutes-seconds-pipe';
import { PodcastDetailPlayercontentComponent } from './podcast-detail-playercontent/podcast-detail-playercontent.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    MinuteSecondsPipe,

    PodcastDetailMainComponent,
    PodcastDetailPlayerComponent,
    PodcastDetailSummaryComponent,
    PodcastDetailGridComponent,
    PodcastDetailPlayercontentComponent],

  exports: [PodcastDetailMainComponent,
            PodcastDetailPlayerComponent],

  providers: [PodcastDetailsService]
})
export class PodcastDetailsModule { }
