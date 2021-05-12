import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroundMapPageRoutingModule } from './ground-map-routing.module';

import { GroundMapPage } from './ground-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GroundMapPageRoutingModule
  ],
  declarations: [GroundMapPage]
})
export class GroundMapPageModule { }
