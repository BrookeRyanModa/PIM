import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacketDetailComponent } from './packet/packet-detail/packet-detail.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { PacketListComponent } from './packet/packet-list/packet-list.component';
import { PacketNewComponent } from './packet/packet-new/packet-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'packets', pathMatch: 'full' },
  { path: 'packet', component: PacketDetailComponent, pathMatch: 'full' },
  { path: 'packets', component: PacketListComponent, pathMatch: 'full'  },
  { path: 'packet/new', component: PacketNewComponent, pathMatch: 'full' },
  { path: 'item', component: ItemDetailComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
