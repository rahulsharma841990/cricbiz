import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentatorsPage } from './commentators.page';

const routes: Routes = [
  {
    path: '',
    component: CommentatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentatorsPageRoutingModule {}
