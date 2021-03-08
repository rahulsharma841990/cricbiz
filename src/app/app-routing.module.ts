import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournaments',
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
  },
  {
    path: 'tournament-created',
    loadChildren: () => import('./teams/tournament-created/tournament-created.module').then(m => m.TournamentCreatedPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./profile/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./teams/tournaments/tournaments.module').then(m => m.TournamentsPageModule)
  },  {
    path: 'team-create',
    loadChildren: () => import('./teams/team-create/team-create.module').then( m => m.TeamCreatePageModule)
  },
  {
    path: 'type-of-team',
    loadChildren: () => import('./teams/type-of-team/type-of-team.module').then( m => m.TypeOfTeamPageModule)
  },
  {
    path: 'add-friends',
    loadChildren: () => import('./teams/add-friends/add-friends.module').then( m => m.AddFriendsPageModule)
  },
  {
    path: 'online-players',
    loadChildren: () => import('./teams/online-players/online-players.module').then( m => m.OnlinePlayersPageModule)
  },
  {
    path: 'add-player-bbl',
    loadChildren: () => import('./teams/add-player-bbl/add-player-bbl.module').then( m => m.AddPlayerBblPageModule)
  },
  {
    path: 'starta-match',
    loadChildren: () => import('./teams/starta-match/starta-match.module').then( m => m.StartaMatchPageModule)
  },
  {
    path: 'select-team-b',
    loadChildren: () => import('./teams/select-team-b/select-team-b.module').then( m => m.SelectTeamBPageModule)
  },
  {
    path: 'select-captain',
    loadChildren: () => import('./teams/select-captain/select-captain.module').then( m => m.SelectCaptainPageModule)
  },
  {
    path: 'select-stricker',
    loadChildren: () => import('./teams/select-stricker/select-stricker.module').then( m => m.SelectStrickerPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./authenticate/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'bowling-maching',
    loadChildren: () => import('./teams/bowling-maching/bowling-maching.module').then( m => m.BowlingMachingPageModule)
  },
  {
    path: 'commentators',
    loadChildren: () => import('./teams/commentators/commentators.module').then( m => m.CommentatorsPageModule)
  },
  {
    path: 'cricket-news',
    loadChildren: () => import('./news/cricket-news/cricket-news.module').then( m => m.CricketNewsPageModule)
  },
  {
    path: 'cricket-news-internation',
    loadChildren: () => import('./news/cricket-news-internation/cricket-news-internation.module').then( m => m.CricketNewsInternationPageModule)
  },
  {
    path: 'cricket-clubs',
    loadChildren: () => import('./news/cricket-clubs/cricket-clubs.module').then( m => m.CricketClubsPageModule)
  },
  {
    path: 'commentators-details',
    loadChildren: () => import('./teams/commentators-details/commentators-details.module').then( m => m.CommentatorsDetailsPageModule)
  },
  {
    path: 'emerging-news',
    loadChildren: () => import('./news/emergingCricket/emerging-news/emerging-news.module').then( m => m.EmergingNewsPageModule)
  },
  {
    path: 'unattempted',
    loadChildren: () => import('./quiz/unattempted/unattempted.module').then( m => m.UnattemptedPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
