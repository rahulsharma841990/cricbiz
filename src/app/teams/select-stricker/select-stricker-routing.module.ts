import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectStrickerPage } from './select-stricker.page';

const routes: Routes = [
  {
    path: '',
    component: SelectStrickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectStrickerPageRoutingModule {}
