import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergingNewsPage } from './emerging-news.page';

const routes: Routes = [
  {
    path: '',
    component: EmergingNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergingNewsPageRoutingModule {}
