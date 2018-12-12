import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { PacketDetailComponent } from './packet/packet-detail/packet-detail.component';
import { PacketListComponent } from './packet/packet-list/packet-list.component';
import { PacketNewComponent } from './packet/packet-new/packet-new.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    PacketDetailComponent,
    PacketListComponent,
    PacketNewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
