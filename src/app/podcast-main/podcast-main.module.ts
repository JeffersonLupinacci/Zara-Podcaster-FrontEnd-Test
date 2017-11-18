import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastListItemComponent } from './podcast-list-item/podcast-list-item.component';
import { AppRoutingModule } from './../app-routing.module';
import { PodcastMainService } from './podcast-main.service';
import { PodcastFilterPipe } from './podcast-filter-pipe';

import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    LazyLoadImageModule,
    CoreModule
  ],
  declarations:
    [PodcastFilterPipe,
     PodcastListComponent,
     PodcastListItemComponent],
  providers:
    [PodcastMainService]
})
export class PodcastMainModule { }
