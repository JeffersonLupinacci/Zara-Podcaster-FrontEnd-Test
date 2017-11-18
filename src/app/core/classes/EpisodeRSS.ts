export class EpisodeRSS {
  id: number;
  content: string;
  pubDate: Date;
  duration: number;
  link: string;
  contentType: string;
  title: string;

  constructor(id: number, content: string,
              pubDate: Date, duration: number,
              link: string, contentType: string, title: string) {
    this.id = id;
    this.content = content;
    this.pubDate = pubDate;
    this.duration = duration;
    this.link = link;
    this.contentType = contentType;
    this.title = title;
  }
}
