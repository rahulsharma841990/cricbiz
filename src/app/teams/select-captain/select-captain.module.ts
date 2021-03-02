import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCaptainPageRoutingModule } from './select-captain-routing.module';

import { SelectCaptainPage } from './select-captain.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectCaptainPageRoutingModule,
  ],
  declarations: [SelectCaptainPage],
})
export class SelectCaptainPageModule {}
