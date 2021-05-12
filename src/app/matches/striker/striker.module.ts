import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrikerPageRoutingModule } from './striker-routing.module';

import { StrikerPage } from './striker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StrikerPageRoutingModule
  ],
  declarations: [StrikerPage]
})
export class StrikerPageModule { }
