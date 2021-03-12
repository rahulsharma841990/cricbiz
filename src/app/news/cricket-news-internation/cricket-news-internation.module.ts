import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketNewsInternationPageRoutingModule } from './cricket-news-internation-routing.module';

import { CricketNewsInternationPage } from './cricket-news-internation.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CricketNewsInternationPageRoutingModule,
  ],
  declarations: [CricketNewsInternationPage],
})
export class CricketNewsInternationPageModule {}
