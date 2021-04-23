import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BowlingMachingPageRoutingModule } from './bowling-maching-routing.module';

import { BowlingMachingPage } from './bowling-maching.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BowlingMachingPageRoutingModule,
  ],
  declarations: [BowlingMachingPage],
})
export class BowlingMachingPageModule {}
