import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTeamBPage } from './select-team-b.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTeamBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTeamBPageRoutingModule {}
