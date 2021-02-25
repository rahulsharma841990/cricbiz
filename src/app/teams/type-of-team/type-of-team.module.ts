import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { TypeOfTeamPageRoutingModule } from './type-of-team-routing.module';

import { TypeOfTeamPage } from './type-of-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TypeOfTeamPageRoutingModule,
  ],
  declarations: [TypeOfTeamPage],
})
export class TypeOfTeamPageModule {}
