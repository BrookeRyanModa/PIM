import { Component, OnInit } from '@angular/core';
import { Packet } from '../packet.model';


@Component({
  templateUrl:'./packet-list.component.html',
  styleUrls: ['./packet-list.component.scss']
})
export class PacketListComponent implements OnInit {
  packets: Packet[] = [];
  months: string[] = [];
  // selected: string ='';

  ngOnInit() {
    this.packets = [
      new Packet(2, "2018-12-05T19:20+01:00","Johanna Ortiz", "SS19", []),
      new Packet(3, "2018-12-03T19:20+01:00","Oscar De La Renta", "SS19", []),
      new Packet(4, "2018-11-23T19:20+01:00","Greg Lauren", "SS19", []),
      new Packet(5, "2018-11-12T19:20+01:00","The Elder Statesman", "SS19", []),
      new Packet(6, "2018-11-05T19:20+01:00","Brandon Maxwell", "SS19", []),
      new Packet(7, "2018-11-03T19:20+01:00","Danse Lente", "SS19", []),
      new Packet(8, "2018-11-03T19:20+01:00","Yeon", "SS19", []),
    ];
    this.months = this.getMonths();
    console.log(this.months)
  }

  getMonths() {
    let myMonths = [];
    let myDates = [];
    for(let packet of this.packets) {
      if (packet['created_at'].slice(5,7) !== myMonths[myMonths.length-1]) {
        myMonths.push(packet['created_at'].slice(5,7));
        myDates.push(packet['created_at']);
      }
    }
    return myDates;
  }

}
