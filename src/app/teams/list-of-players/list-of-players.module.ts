import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfPlayersPageRoutingModule } from './list-of-players-routing.module';

import { ListOfPlayersPage } from './list-of-players.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Ng2SearchPipeModule,
    ListOfPlayersPageRoutingModule
  ],
  declarations: [ListOfPlayersPage]
})
export class ListOfPlayersPageModule { }
