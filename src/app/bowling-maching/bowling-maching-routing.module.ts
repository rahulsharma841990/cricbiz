import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BowlingMachingPage } from './bowling-maching.page';

const routes: Routes = [
  {
    path: '',
    component: BowlingMachingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BowlingMachingPageRoutingModule {}
