import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InningsPageRoutingModule } from './innings-routing.module';

import { InningsPage } from './innings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InningsPageRoutingModule
  ],
  declarations: [InningsPage]
})
export class InningsPageModule { }
