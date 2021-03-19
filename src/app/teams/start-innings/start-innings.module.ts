import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartInningsPageRoutingModule } from './start-innings-routing.module';

import { StartInningsPage } from './start-innings.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StartInningsPageRoutingModule,
  ],
  declarations: [StartInningsPage],
})
export class StartInningsPageModule {}
