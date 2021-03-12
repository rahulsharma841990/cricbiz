import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnattemptedPageRoutingModule } from './unattempted-routing.module';

import { UnattemptedPage } from './unattempted.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UnattemptedPageRoutingModule,
  ],
  declarations: [UnattemptedPage],
})
export class UnattemptedPageModule {}
