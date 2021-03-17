import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketTipsPageRoutingModule } from './cricket-tips-routing.module';

import { CricketTipsPage } from './cricket-tips.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CricketTipsPageRoutingModule,
  ],
  declarations: [CricketTipsPage],
})
export class CricketTipsPageModule {}
