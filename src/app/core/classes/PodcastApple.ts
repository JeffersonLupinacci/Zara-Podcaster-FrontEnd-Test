export class PodcastApple {
  artworkUrl600: string;
  feedUrl: string;
  expire: number;

  constructor(artworkUrl600: string, feedUrl: string) {
    this.artworkUrl600 = artworkUrl600;
    this.feedUrl = feedUrl;
  }
}
