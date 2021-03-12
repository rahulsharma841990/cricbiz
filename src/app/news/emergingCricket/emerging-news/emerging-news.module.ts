import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergingNewsPageRoutingModule } from './emerging-news-routing.module';

import { EmergingNewsPage } from './emerging-news.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmergingNewsPageRoutingModule,
  ],
  declarations: [EmergingNewsPage],
})
export class EmergingNewsPageModule {}
