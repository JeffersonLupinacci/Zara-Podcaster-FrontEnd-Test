import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PodcasterItem } from '../core/classes/PodcasterItem';

@Injectable()
export class PodcastMainService {

  constructor(
      private http: Http) {
  }

  getPodcaster(): Promise<any> {

    const storagePodcaster = 'podcaster';
    const storagePodcasterExpire = 'podcaster_expire';

    // Get Feed and ExpireDate for invalid cache
    const retrievedData = localStorage.getItem(storagePodcaster);
    const retrievedExpire = localStorage.getItem(storagePodcasterExpire);

    let podcaster: PodcasterItem[];

    podcaster = JSON.parse(retrievedData);
    const expire = new Date(parseInt(retrievedExpire, 0));
    const date = new Date;

    if ((date > expire) || (null === expire)) {
      podcaster = null;
    }

    if (null != podcaster) {
      return new Promise((resolve, reject) => {
        // Returning from cache
        resolve(podcaster);
      });
    } else  {
      return this.http.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .toPromise()
        .then(response => {

          // Set the ExpireDate
          localStorage.setItem(storagePodcasterExpire, JSON.stringify(date.setDate(date.getDate() + 1)));

          podcaster = response.json().feed.entry.map(item => {
            return new PodcasterItem(
              item.id.attributes['im:id'],
              item['im:image'][0].label,
              item.title.label,
              item['im:artist'].label);
          });

          // set the Feed
          localStorage.setItem(storagePodcaster, JSON.stringify(podcaster));
          return podcaster;
        })
        .catch(erro => {
          // console.log(erro);
       });
    }
  }
}
