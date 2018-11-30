import { Component, OnInit } from '@angular/core';
import { Packet } from './packet';
import { Item } from './item';
import { ItemDetailComponent } from './item-detail.component';

@Component({
  templateUrl: 'packet-detail.component.html',
  styleUrls: ['packet-detail.component.scss']
})

export class PacketDetailComponent implements OnInit {
  packet: Packet;
  myItems = [];

  ngOnInit() {
    this.myItems = [
      new Item(
        'Rose Printed Ball Gown',
        'full skirt with strapless lace bodice',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item('Club Jacket',
       'classic doe skin blazer',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item('Stovepipe Pant',
      'straight leg, grey virgin wool',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'Rose Printed Ball Gown',
        'full skirt with strapless lace bodice',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item('Club Jacket',
       'classic doe skin blazer',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item('Stovepipe Pant',
      'straight leg, grey virgin wool',
        ["https://c1.staticflickr.com/5/4775/40100044804_aac7d0c2fd_o.jpg",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      )
    ];
    this.packet = new Packet(1, 'Oscar de la Renta', 'SS19', this.myItems);
  }


}
