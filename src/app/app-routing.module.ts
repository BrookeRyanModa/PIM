import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacketDetailComponent } from './views/packet-detail.component';
import { ItemDetailComponent } from './views/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'packet', pathMatch: 'full' },
  { path: 'packet', component: PacketDetailComponent },
  { path: 'item', component: ItemDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
