import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardsPageRoutingModule } from './awards-routing.module';

import { AwardsPage } from './awards.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AwardsPageRoutingModule,
  ],
  declarations: [AwardsPage],
})
export class AwardsPageModule {}
