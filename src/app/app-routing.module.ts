import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PacketDetailComponent } from './views/packet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'packet', pathMatch: 'full' },
  { path: 'packet', component: PacketDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}

