import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlayerBblPage } from './add-player-bbl.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlayerBblPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlayerBblPageRoutingModule {}
