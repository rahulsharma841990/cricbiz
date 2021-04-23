import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentCreatePage } from './tournament-create.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentCreatePageRoutingModule {}
