import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournament-create',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./authenticate/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./teams/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'tournament-create',
    loadChildren: () => import('./teams/tournament-create/tournament-create.module').then(m => m.TournamentCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
