import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacketDetailComponent } from './packet/packet-detail.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { PacketListComponent } from './packet/packet-list/packet-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'packet', pathMatch: 'full' },
  { path: 'packet', component: PacketDetailComponent },
  { path: 'packets', component: PacketListComponent },
  { path: 'item', component: ItemDetailComponent }

];
// const routes: Routes = [
//   { path: '', redirectTo: 'packet', pathMatch: 'full' },
//   { path: 'packets',
//     component: PacketListComponent,
//     children: [
//       { path: 'new',
//         children: generateRoutes('packet', CreatePacketComponent)
//       },
//       { path: ':packetId',
//         children: generateRoutes('packet', PacketDetailComponent)
//       },
//       { path: ':packetId/edit',
//         children: generateRoutes('packet', PacketUpdateComponent)
//       }
//     ]
//   },
//   { path: 'items', component: ItemListComponent,
//     children: [
//       { path: 'new',
//         children: generateRoutes('item', CreateItemComponent)
//       },
//       { path: ':style_number',
//         children: generateRoutes('item', ItemDetailComponent)
//       },
//       { path: ':style_number/edit',
//         children: generateRoutes('item', ItemUpdateComponent)
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
