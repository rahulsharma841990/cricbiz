import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlinePlayersPageRoutingModule } from './online-players-routing.module';

import { OnlinePlayersPage } from './online-players.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OnlinePlayersPageRoutingModule,
  ],
  declarations: [OnlinePlayersPage],
})
export class OnlinePlayersPageModule {}
