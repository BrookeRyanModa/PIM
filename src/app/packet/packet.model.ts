import { ItemModel } from '../item/item.model';

export class PacketModel {
  id: number;
  title: string;
  desc: string;
  items: ItemModel[];

  constructor(id, title, desc, items?) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.items = items;
  }

}
