import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlayerBblPageRoutingModule } from './add-player-bbl-routing.module';

import { AddPlayerBblPage } from './add-player-bbl.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddPlayerBblPageRoutingModule,
  ],
  declarations: [AddPlayerBblPage],
})
export class AddPlayerBblPageModule { }
