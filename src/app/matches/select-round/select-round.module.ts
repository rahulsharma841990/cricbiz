import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRoundPageRoutingModule } from './select-round-routing.module';

import { SelectRoundPage } from './select-round.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectRoundPageRoutingModule
  ],
  declarations: [SelectRoundPage]
})
export class SelectRoundPageModule { }
