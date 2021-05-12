import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroundMapPage } from './ground-map.page';

const routes: Routes = [
  {
    path: '',
    component: GroundMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroundMapPageRoutingModule {}
