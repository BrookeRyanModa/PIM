import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.scss']
})

export class ItemDetailComponent {
  item: Item;

}
