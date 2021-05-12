import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InningsPage } from './innings.page';

const routes: Routes = [
  {
    path: '',
    component: InningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InningsPageRoutingModule {}
