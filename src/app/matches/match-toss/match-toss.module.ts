import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchTossPageRoutingModule } from './match-toss-routing.module';

import { MatchTossPage } from './match-toss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MatchTossPageRoutingModule
  ],
  declarations: [MatchTossPage]
})
export class MatchTossPageModule { }
