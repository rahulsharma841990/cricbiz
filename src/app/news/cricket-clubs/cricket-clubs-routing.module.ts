import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketClubsPage } from './cricket-clubs.page';

const routes: Routes = [
  {
    path: '',
    component: CricketClubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketClubsPageRoutingModule {}
