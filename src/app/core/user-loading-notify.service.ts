import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
// responsible for notifying the user of processing
export class UserLoadingNotifyService {

  emitterLoading = new EventEmitter<Boolean>();

  // Insert the Loading Icon
  startLoading() {
    this.emitterLoading.emit(true);
  }

  // Remove the Loading Icon
  stopLoading() {
    this.emitterLoading.emit(false);
  }
}
