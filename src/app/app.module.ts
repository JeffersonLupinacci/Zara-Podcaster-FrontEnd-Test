import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { PodcastDetailsModule } from './podcast-details/podcast-details.module';
import { PodcastMainModule } from './podcast-main/podcast-main.module';
import { UserLoadingNotifyService } from './core/user-loading-notify.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LazyLoadImageModule,

    CoreModule,
    AppRoutingModule,
    PodcastMainModule,
    PodcastDetailsModule
  ],
  providers: [UserLoadingNotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
