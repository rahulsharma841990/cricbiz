import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeOfTeamPage } from './type-of-team.page';

const routes: Routes = [
  {
    path: '',
    component: TypeOfTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeOfTeamPageRoutingModule {}
