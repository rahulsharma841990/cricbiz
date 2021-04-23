import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartaMatchPageRoutingModule } from './starta-match-routing.module';

import { StartaMatchPage } from './starta-match.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StartaMatchPageRoutingModule,
  ],
  declarations: [StartaMatchPage],
})
export class StartaMatchPageModule {}
