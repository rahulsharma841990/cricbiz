import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfPlayersPage } from './list-of-players.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfPlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfPlayersPageRoutingModule {}
