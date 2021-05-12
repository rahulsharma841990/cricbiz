import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrikerPage } from './striker.page';

const routes: Routes = [
  {
    path: '',
    component: StrikerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrikerPageRoutingModule {}
