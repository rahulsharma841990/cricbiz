import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketAssociationsPage } from './cricket-associations.page';

const routes: Routes = [
  {
    path: '',
    component: CricketAssociationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketAssociationsPageRoutingModule {}
