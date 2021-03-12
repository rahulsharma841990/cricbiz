import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTeamPageRoutingModule } from './add-team-routing.module';

import { AddTeamPage } from './add-team.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddTeamPageRoutingModule,
  ],
  declarations: [AddTeamPage],
})
export class AddTeamPageModule {}
