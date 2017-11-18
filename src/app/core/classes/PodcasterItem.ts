export class PodcasterItem {
  id: string;
  image: string;
  title: string;
  artist: string;

  constructor(id: string, image: string,
    title: string, artist: string) {
      this.id = id;
      this.image = image;
      this.title = title;
      this.artist = artist;
  }
}
