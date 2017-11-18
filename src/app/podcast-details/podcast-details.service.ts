import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EpisodeRSS } from './../core/classes/EpisodeRSS';
import { PodcastRSS } from './../core/classes/PodcastRSS';
import { PodcastApple } from './../core/classes/PodcastApple';

@Injectable()
export class PodcastDetailsService {

  constructor(private http: Http) {}

  getPodcastApple(podcastId: string): Promise<PodcastApple> {

    const storagePodcastApple = 'podcast_' + podcastId;
    const storagePodcastExpire = 'podcast_' + podcastId + '_expire';
    const storagePodcastEpisodes  = 'podcast_' + podcastId + '_episodes';

    const retrievedData = localStorage.getItem(storagePodcastApple);
    const retrievedExpire = localStorage.getItem(storagePodcastExpire);

    let podcastApple = JSON.parse(retrievedData);
    const expire = new Date(parseInt(retrievedExpire, 0));
    const date = new Date;

    if ((date > expire) || (null === expire)) {
      podcastApple = null;
      // Clear episodes invalid cache
      localStorage.setItem(storagePodcastEpisodes, null);
    }

    if (null != podcastApple) {
      return new Promise((resolve, reject) => {
        // Returning from cache
        resolve(podcastApple);
      });
    } else  {
      return this.http.get('https://itunes.apple.com/lookup?id=' + podcastId)
        .toPromise()
        .then(response => {
          // Set the ExpireDate
          localStorage.setItem(storagePodcastExpire, JSON.stringify(date.setDate(date.getDate() + 1)));

          const item = response.json().results[0];

          podcastApple = new PodcastApple(
            item.artworkUrl600,
            item.feedUrl
          );

          // set the Feed
          localStorage.setItem(storagePodcastApple, JSON.stringify(podcastApple));
          return podcastApple;

        })
        .catch(erro => {
          // console.log(erro);
       });
    }
  }

  getPodcastRSS(podcastId: string, feedUrl: string): Promise<any> {

    const storagePodcastRSS = 'podcast_' + podcastId + '_episodes';
    const retrievedData = localStorage.getItem(storagePodcastRSS);

    let podcastRSS = JSON.parse(retrievedData);

    if (null != podcastRSS) {
      return new Promise((resolve, reject) => {
        // Returning from cache
        resolve(podcastRSS);
      });
    } else  {
      // API RSS2JSon without cors
      return this.http.get('https://rss2json.com/api.json?api_key=xpkfpghzkqjnlvl0wayk5qvsdgbqo6t55ma6zsrz&rss_url=' + feedUrl)
        .toPromise()
        .then(response => {

          const j = response.json();

          // Generating episodes
          let id = 0;
          let tracksTemp = null;
          if (null != j.items) {
            tracksTemp = j.items.map( item => {
              return new EpisodeRSS(
                ++id,
                item.content,
                item.pubDate,
                item.enclosure.duration,
                item.enclosure.link,
                item.enclosure.type,
                item.title
              );
            });
          }

          // Generate podcast with episodes
          if (null != j.feed) {
            podcastRSS = new PodcastRSS(
              podcastId,
              this.removeHtml(j.feed.author),
              this.removeHtml(j.feed.description),
              this.removeHtml(j.feed.title),
              tracksTemp
            );
          }

          localStorage.setItem(storagePodcastRSS, JSON.stringify(podcastRSS));
          return podcastRSS;
        })
        .catch(erro => {
          // console.log(erro);
        });
    }
  }

  removeHtml (text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
