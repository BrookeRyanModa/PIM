import { Component, OnInit } from '@angular/core';
import { Packet } from '../packet.model';


@Component({
  templateUrl:'./packet-list.component.html',
  styleUrls: ['./packet-list.component.scss']
})
export class PacketListComponent implements OnInit {
  packets: Packet[] = [];
  // selected: string ='';

  ngOnInit() {
    this.packets = [
      new Packet(2, "Johanna Ortiz", "SS19", []),
      new Packet(3, "Oscar De La Renta", "SS19", []),
      new Packet(4, "Greg Lauren", "SS19", []),
      new Packet(5, "The Elder Statesman", "SS19", []),
      new Packet(6, "Brandon Maxwell", "SS19", []),
      new Packet(7, "Danse Lente", "SS19", []),
      new Packet(8, "Yeon", "SS19", []),
    ];
    // this.selected = 'all';
  }
  //
  // onPacketFilter(filter: string){
  //   this.selected = filter;
  // }

}
