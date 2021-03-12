import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketClubsPageRoutingModule } from './cricket-clubs-routing.module';

import { CricketClubsPage } from './cricket-clubs.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CricketClubsPageRoutingModule,
  ],
  declarations: [CricketClubsPage],
})
export class CricketClubsPageModule {}
