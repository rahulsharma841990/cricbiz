import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartaMatchPage } from './starta-match.page';

const routes: Routes = [
  {
    path: '',
    component: StartaMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartaMatchPageRoutingModule {}
