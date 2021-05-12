import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualTossPageRoutingModule } from './virtual-toss-routing.module';

import { VirtualTossPage } from './virtual-toss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VirtualTossPageRoutingModule
  ],
  declarations: [VirtualTossPage]
})
export class VirtualTossPageModule { }
