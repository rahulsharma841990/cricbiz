import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentatorsPageRoutingModule } from './commentators-routing.module';

import { CommentatorsPage } from './commentators.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommentatorsPageRoutingModule,
  ],
  declarations: [CommentatorsPage],
})
export class CommentatorsPageModule {}
