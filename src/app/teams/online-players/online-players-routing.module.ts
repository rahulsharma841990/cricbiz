import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlinePlayersPage } from './online-players.page';

const routes: Routes = [
  {
    path: '',
    component: OnlinePlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlinePlayersPageRoutingModule {}
