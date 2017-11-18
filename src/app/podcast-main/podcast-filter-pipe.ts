import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class PodcastFilterPipe implements PipeTransform {
  transform(podcasts: any[], term: any): any {
    if (term == null) {
      return podcasts;
    }

    // Filter by Title or Artist
    return podcasts.filter(
      function(podcast)
      {
        return podcast.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
              podcast.artist.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
  }

}
