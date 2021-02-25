import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { TeamCreatePageRoutingModule } from './team-create-routing.module';

import { TeamCreatePage } from './team-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TeamCreatePageRoutingModule,
  ],
  declarations: [TeamCreatePage],
})
export class TeamCreatePageModule {}
