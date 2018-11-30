
export class Item {
  packetId: number;
  name: string;
  desc: string;
  images: HTMLImageElement[];

  constructor(name, desc, images, packetId?) {
    this.packetId = packetId;
    this.name = name;
    this.desc = desc;
    this.images = images;
  }
}
