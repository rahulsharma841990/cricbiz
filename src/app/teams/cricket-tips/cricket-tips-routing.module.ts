import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketTipsPage } from './cricket-tips.page';

const routes: Routes = [
  {
    path: '',
    component: CricketTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketTipsPageRoutingModule {}
