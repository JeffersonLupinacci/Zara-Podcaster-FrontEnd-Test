import { Component, OnInit } from '@angular/core';
import { UserLoadingNotifyService } from './user-loading-notify.service';

@Component({
  selector: 'app-user-loading-notify',
  template: `<div>
              <img src="assets/loading.svg" *ngIf="status">
            </div>`
})
export class UserLoadingNotifyComponent implements OnInit {

  public status: Boolean;

  constructor(private userLoadingNotifyService: UserLoadingNotifyService) {}

  ngOnInit() {
    // listening to the notify service
    this.userLoadingNotifyService.emitterLoading.subscribe(
      status => this.status = status
    );
  }

}
