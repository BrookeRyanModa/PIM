import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item.model';

@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.scss']
})

export class ItemDetailComponent {
  item: ItemModel;

}
