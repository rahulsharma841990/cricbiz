import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCaptainPage } from './select-captain.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCaptainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCaptainPageRoutingModule {}
