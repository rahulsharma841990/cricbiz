import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentatorsDetailsPage } from './commentators-details.page';

const routes: Routes = [
  {
    path: '',
    component: CommentatorsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentatorsDetailsPageRoutingModule {}
