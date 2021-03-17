import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketAssociationsPageRoutingModule } from './cricket-associations-routing.module';

import { CricketAssociationsPage } from './cricket-associations.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CricketAssociationsPageRoutingModule,
  ],
  declarations: [CricketAssociationsPage],
})
export class CricketAssociationsPageModule {}
