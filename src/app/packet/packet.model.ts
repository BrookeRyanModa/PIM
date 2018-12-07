import { Item } from '../item/item.model';

export class Packet {
  id: number;
  title: string;
  desc: string;
  items: Item[];

  constructor( id: number,
               title: string,
               desc: string,
               items: Item[]
              ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.items = items;
  }

}
