
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TournamentCreatePageRoutingModule } from './tournament-create-routing.module';

import { TournamentCreatePage } from './tournament-create.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    TagInputModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentCreatePageRoutingModule,
    SharedModule
  ],
  declarations: [TournamentCreatePage]
})
export class TournamentCreatePageModule { }
