import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionsPageRoutingModule } from './connections-routing.module';

import { ConnectionsPage } from './connections.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ConnectionsPageRoutingModule,
  ],
  declarations: [ConnectionsPage],
})
export class ConnectionsPageModule {}
