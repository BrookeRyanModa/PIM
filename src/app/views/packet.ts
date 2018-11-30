import { Item } from './item';

export class Packet {
  id: number;
  title: string;
  desc: string;
  items: Item[];

  constructor(id, title, desc, items?) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.items = items;
  }

}
