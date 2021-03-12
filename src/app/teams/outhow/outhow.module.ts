import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuthowPageRoutingModule } from './outhow-routing.module';

import { OuthowPage } from './outhow.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OuthowPageRoutingModule,
  ],
  declarations: [OuthowPage],
})
export class OuthowPageModule {}
