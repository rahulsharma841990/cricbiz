import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentCreatedPage } from './tournament-created.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentCreatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentCreatedPageRoutingModule {}
