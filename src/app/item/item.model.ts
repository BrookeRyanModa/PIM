
export class Item {
  packetId: number | undefined;
  category: string;
  style_number: string;
  images: string[];

  constructor(category: string, style_number: string, images: string[], packetId?: number) {
    this.category = category;
    this.style_number = style_number;
    this.images = images;
    this.packetId = packetId;

  }
}
