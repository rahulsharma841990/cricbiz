import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTeamBPageRoutingModule } from './select-team-b-routing.module';

import { SelectTeamBPage } from './select-team-b.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectTeamBPageRoutingModule,
  ],
  declarations: [SelectTeamBPage],
})
export class SelectTeamBPageModule {}
