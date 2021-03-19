import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartInningsPage } from './start-innings.page';

const routes: Routes = [
  {
    path: '',
    component: StartInningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartInningsPageRoutingModule {}
