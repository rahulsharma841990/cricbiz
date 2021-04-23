import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuthowPage } from './outhow.page';

const routes: Routes = [
  {
    path: '',
    component: OuthowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuthowPageRoutingModule {}
