import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IccPageRoutingModule } from './icc-routing.module';

import { IccPage } from './icc.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IccPageRoutingModule,
  ],
  declarations: [IccPage],
})
export class IccPageModule {}
