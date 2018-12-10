import { Component,  } from '@angular/core';
import { Packet } from '../packet.model';


@Component({
  templateUrl:'./packet-list.component.html',
  styleUrls: ['./packet-list.component.scss']
})
export class PacketListComponent {
  packets: Packet[] = [];


}
