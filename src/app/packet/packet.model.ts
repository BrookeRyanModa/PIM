import { Item } from '../item/item.model';

export class Packet {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  items: Item[];

  constructor(id: number,
               created_at: string,
               title: string,
               desc: string,
               items: Item[]
              ) {
    this.id = id;
    this.created_at = created_at;
    this.title = title;
    this.desc = desc;
    this.items = items;
  }

}
