import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketNewsPage } from './cricket-news.page';

const routes: Routes = [
  {
    path: '',
    component: CricketNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketNewsPageRoutingModule {}
