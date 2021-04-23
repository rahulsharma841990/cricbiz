import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRoundPage } from './select-round.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoundPageRoutingModule {}
