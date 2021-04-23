import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRoundsPageRoutingModule } from './add-rounds-routing.module';

import { AddRoundsPage } from './add-rounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddRoundsPageRoutingModule
  ],
  declarations: [AddRoundsPage]
})
export class AddRoundsPageModule { }
