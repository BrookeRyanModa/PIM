import { Component, OnInit } from '@angular/core';
import { Packet } from '../packet.model';
import { Item } from '../../item/item.model';

@Component({
  templateUrl: 'packet-detail.component.html',
  styleUrls: ['packet-detail.component.scss']
})

export class PacketDetailComponent implements OnInit {
  packet: object = Packet;
  myItems: Item[] = [];

  ngOnInit() {
    this.myItems = [
      new Item(
        'clothing - dresses',
        'ODL_559',
        ["https://assets12.modaoperandi.com/images/products/676579/276822/c/large_oscar-de-la-renta-floral-floral-applique-silk-blend-midi-dress.jpg?_v=1542396841",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'clothing - dresses',
        'ODL_560',
        ["https://assets13.modaoperandi.com/images/products/676576/276819/c/large_oscar-de-la-renta-floral-sweetheart-raw-hem-floral-stretch-cotton-midi-dress.jpg?_v=1540300192",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'jewelry - fashion',
        'ODL_561',
        ["https://assets13.modaoperandi.com/images/products/674228/274272/c/large_oscar-de-la-renta-red-gold-tone-crystal-clip-earrings.jpg?_v=1543459698",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'clothing - dresses',
        'ODL_562',
        ["https://assets11.modaoperandi.com/images/products/676583/276826/c/large_oscar-de-la-renta-navy-ruffled-stretch-cotton-midi-dress.jpg?_v=1542354071",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'clothing - bottoms',
        'ODL_563',
        ["https://assets13.modaoperandi.com/images/products/676581/276824/c/large_oscar-de-la-renta-black-white-polka-dot-cotton-wide-leg-pants.jpg?_v=1540826988",
        "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
        "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      ),
      new Item(
        'clothing - tops',
        'ODL_564',
        ["https://assets11.modaoperandi.com/images/products/676574/276817/c/large_oscar-de-la-renta-floral-raw-hem-floral-stretch-cotton-bustier.jpg?_v=1542744949",
          "https://c1.staticflickr.com/5/4773/26939813508_5e0e3bcffa_o.jpg",
          "https://c1.staticflickr.com/5/4775/26939814418_2a56d220e2_o.jpg"]
      )
    ];
    this.packet = new Packet(1, "2018-12-05T19:20+01:00",'Oscar de la Renta', 'SS19', this.myItems);
  }


}
