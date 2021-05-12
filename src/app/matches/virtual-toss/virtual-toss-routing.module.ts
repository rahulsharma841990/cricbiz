import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualTossPage } from './virtual-toss.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualTossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualTossPageRoutingModule {}
