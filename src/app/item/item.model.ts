
export class ItemModel {
  packetId: number;
  category: string;
  style_number: string;
  images: HTMLImageElement[];

  constructor(category, style_number, images, packetId?) {
    this.packetId = packetId;
    this.category = category;
    this.style_number = style_number;
    this.images = images;
  }
}
