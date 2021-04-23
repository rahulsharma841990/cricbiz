import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentCreatedPageRoutingModule } from './tournament-created-routing.module';

import { TournamentCreatedPage } from './tournament-created.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentCreatedPageRoutingModule,
    SharedModule
  ],
  declarations: [TournamentCreatedPage]
})
export class TournamentCreatedPageModule { }
