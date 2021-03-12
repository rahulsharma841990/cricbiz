import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnattemptedPage } from './unattempted.page';

const routes: Routes = [
  {
    path: '',
    component: UnattemptedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnattemptedPageRoutingModule {}
