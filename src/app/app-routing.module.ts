import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./authenticate/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'tournament-create',
    loadChildren: () => import('./tournament-create/tournament-create.module').then(m => m.TournamentCreatePageModule)
  },
  {
    path: 'tournament-created',
    loadChildren: () => import('./tournament-created/tournament-created.module').then(m => m.TournamentCreatedPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./profile/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsPageModule)
  },
  {
    path: 'team-create',
    loadChildren: () => import('./teams/team-create/team-create.module').then(m => m.TeamCreatePageModule)
  },
  {
    path: 'type-of-team',
    loadChildren: () => import('./teams/type-of-team/type-of-team.module').then(m => m.TypeOfTeamPageModule)
  },
  {
    path: 'add-friends',
    loadChildren: () => import('./teams/add-friends/add-friends.module').then(m => m.AddFriendsPageModule)
  },
  {
    path: 'online-players',
    loadChildren: () => import('./teams/online-players/online-players.module').then(m => m.OnlinePlayersPageModule)
  },
  {
    path: 'add-player-to-team',
    loadChildren: () => import('./teams/add-player-to-team/add-player-bbl.module').then(m => m.AddPlayerBblPageModule)
  },
  {
    path: 'starta-match',
    loadChildren: () => import('./matches/starta-match/starta-match.module').then(m => m.StartaMatchPageModule)
  },
  {
    path: 'select-captain',
    loadChildren: () => import('./select-captain/select-captain.module').then(m => m.SelectCaptainPageModule)
  },
  {
    path: 'select-stricker',
    loadChildren: () => import('./select-stricker/select-stricker.module').then(m => m.SelectStrickerPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./authenticate/otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'bowling-maching',
    loadChildren: () => import('./bowling-maching/bowling-maching.module').then(m => m.BowlingMachingPageModule)
  },
  {
    path: 'commentators',
    loadChildren: () => import('./commentators/commentators.module').then(m => m.CommentatorsPageModule)
  },
  {
    path: 'cricket-news',
    loadChildren: () => import('./news/cricket-news/cricket-news.module').then(m => m.CricketNewsPageModule)
  },
  {
    path: 'cricket-news-internation',
    loadChildren: () => import('./news/cricket-news-internation/cricket-news-internation.module').then(m => m.CricketNewsInternationPageModule)
  },
  {
    path: 'cricket-clubs',
    loadChildren: () => import('./news/cricket-clubs/cricket-clubs.module').then(m => m.CricketClubsPageModule)
  },
  {
    path: 'commentators-details',
    loadChildren: () => import('./commentators-details/commentators-details.module').then(m => m.CommentatorsDetailsPageModule)
  },
  {
    path: 'emerging-news',
    loadChildren: () => import('./news/emergingCricket/emerging-news/emerging-news.module').then(m => m.EmergingNewsPageModule)
  },
  {
    path: 'unattempted',
    loadChildren: () => import('./quiz/unattempted/unattempted.module').then(m => m.UnattemptedPageModule)
  },
  {
    path: 'add-team',
    loadChildren: () => import('./teams/add-team/add-team.module').then(m => m.AddTeamPageModule)
  },
  {
    path: 'awards',
    loadChildren: () => import('./teams/awards/awards.module').then(m => m.AwardsPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then(m => m.BadgesPageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then(m => m.ConnectionsPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosPageModule)
  },
  {
    path: 'outhow',
    loadChildren: () => import('./outhow/outhow.module').then(m => m.OuthowPageModule)
  },
  {
    path: 'match-types',
    loadChildren: () => import('./matches/match-types/match-types.module').then(m => m.MatchTypesPageModule)
  },
  {
    path: 'my-teams',
    loadChildren: () => import('./teams/my-teams/my-teams.module').then(m => m.MyTeamsPageModule)
  },
  {
    path: 'list-of-players',
    loadChildren: () => import('./teams/list-of-players/list-of-players.module').then(m => m.ListOfPlayersPageModule)
  },
  {
    path: 'squad',
    loadChildren: () => import('./matches/squad/squad.module').then(m => m.SquadPageModule)
  },
  {
    path: 'select-round',
    loadChildren: () => import('./matches/select-round/select-round.module').then( m => m.SelectRoundPageModule)
  },
  {
    path: 'add-rounds',
    loadChildren: () => import('./matches/add-rounds/add-rounds.module').then( m => m.AddRoundsPageModule)
  },
  {
    path: 'match-official',
    loadChildren: () => import('./matches/match-official/match-official.module').then( m => m.MatchOfficialPageModule)
  },
  {
    path: 'match-toss',
    loadChildren: () => import('./matches/match-toss/match-toss.module').then( m => m.MatchTossPageModule)
  },
  {
    path: 'virtual-toss',
    loadChildren: () => import('./matches/virtual-toss/virtual-toss.module').then( m => m.VirtualTossPageModule)
  },
  {
    path: 'striker',
    loadChildren: () => import('./matches/striker/striker.module').then( m => m.StrikerPageModule)
  },
  {
    path: 'innings',
    loadChildren: () => import('./matches/innings/innings.module').then( m => m.InningsPageModule)
  },
  {
    path: 'ground-map',
    loadChildren: () => import('./match/ground-map/ground-map.module').then( m => m.GroundMapPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
