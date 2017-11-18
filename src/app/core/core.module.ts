import { UserLoadingNotifyComponent } from './user-loading-notify.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [PageNotFoundComponent,
     UserLoadingNotifyComponent],
  exports: [UserLoadingNotifyComponent]
})
export class CoreModule { }
