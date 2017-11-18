import { EpisodeRSS } from './EpisodeRSS';

export class PodcastRSS {
  id: string;
  author: string;
  description: string;
  title: string;
  tracks: EpisodeRSS[];

  constructor(id: string, author: string,
      description: string, title: string, tracks: EpisodeRSS[]) {
    this.id = id;
    this.author = author;
    this.description = description;
    this.title = title;
    this.tracks = tracks;
  }
}
