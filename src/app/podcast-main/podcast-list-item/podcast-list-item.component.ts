import { Component, Input } from '@angular/core';

import { PodcasterItem } from '../../core/classes/PodcasterItem';

@Component({
  selector: 'app-podcast-list-item',
  templateUrl: './podcast-list-item.component.html',
  styleUrls: ['./podcast-list-item.component.css']
})
export class PodcastListItemComponent {

  @Input() podcasterItem: PodcasterItem;

}
