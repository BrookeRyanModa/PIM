import { Component } from '@angular/core';
import { Packet } from '../packet.model';

@Component({
  templateUrl:'packet-list.html',
  styleUrls: ['packet-list.scss']
})
export class PacketListComponent {
  packet: Packet


}
