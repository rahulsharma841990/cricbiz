import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchTossPage } from './match-toss.page';

const routes: Routes = [
  {
    path: '',
    component: MatchTossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchTossPageRoutingModule {}
