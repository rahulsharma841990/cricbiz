import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchTypesPageRoutingModule } from './match-types-routing.module';

import { MatchTypesPage } from './match-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MatchTypesPageRoutingModule
  ],
  declarations: [MatchTypesPage]
})
export class MatchTypesPageModule { }
