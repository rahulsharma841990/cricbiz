import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectStrickerPageRoutingModule } from './select-stricker-routing.module';

import { SelectStrickerPage } from './select-stricker.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectStrickerPageRoutingModule,
  ],
  declarations: [SelectStrickerPage],
})
export class SelectStrickerPageModule {}
