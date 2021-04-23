import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentatorsDetailsPageRoutingModule } from './commentators-details-routing.module';

import { CommentatorsDetailsPage } from './commentators-details.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommentatorsDetailsPageRoutingModule,
  ],
  declarations: [CommentatorsDetailsPage],
})
export class CommentatorsDetailsPageModule {}
