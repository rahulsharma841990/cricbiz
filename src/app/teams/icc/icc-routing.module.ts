import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IccPage } from './icc.page';

const routes: Routes = [
  {
    path: '',
    component: IccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IccPageRoutingModule {}
