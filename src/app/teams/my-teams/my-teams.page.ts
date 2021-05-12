import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-teams',
	templateUrl: './my-teams.page.html',
	styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

	type: any = 'my_teams';
	pageType: any;
	teams: any = [];
	teamType: any;
	selectedTeamDetails: any = {};
	tournamentId: any;
	subscriptions: any = [];
	constructor(
		private utilService: UtilsService,
		private restService: ApiService,
		private navCtrl: NavController,
		private activatedRoute: ActivatedRoute,
		private dataService: DataService
	) {
		this.subscriptions['route_params'] = this.activatedRoute.params.subscribe((res: any) => {
			this.pageType = res.type;
			this.teamType = res.team_type;
			this.tournamentId = res.tournament_id;
			this.subscriptions['route_params'].unsubscribe();
		});
	}

	ngOnInit() {
		this.getTeams();
	}

	getTeams() {
		this.utilService.presentLoadingWithOptions().then(() => {
			this.restService.request('teams').then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.teams = res.teams;
				console.log(res);
			});
		});
	}

	ShowContentOf(type) {
		this.type = type;
	}

	viewTeam(team) {
		delete team['players'];
		this.navCtrl.navigateForward(['list-of-players', team]);
	}

	selectedTeam(team) {
		if (this.pageType == 'tournament') {
			if (this.selectedTeamDetails[team.team_id] != undefined && this.selectedTeamDetails[team.team_id] != null) {
				delete this.selectedTeamDetails[team.team_id];
			} else {
				this.selectedTeamDetails[team.team_id] = team;
			}
		} else {
			this.selectedTeamDetails = {};
			this.selectedTeamDetails[team.team_id] = team;
		}
		console.log(this.selectedTeamDetails);
	}

	selectSquard() {
		let selectedTeam = Object.values(this.selectedTeamDetails)[0];
		if (this.tournamentId != undefined && this.tournamentId != null) {
			selectedTeam['tournament_id'] = this.tournamentId;
		} else {
			delete selectedTeam['tournament_id'];
		}
		selectedTeam['team_type'] = this.teamType;
		this.navCtrl.pop().then(() => {
			this.navCtrl.navigateForward(['squad', selectedTeam]);
		});
	}

	selectTeamForTournament() {
		localStorage.setItem('selected_teams_for_tournament', JSON.stringify(this.selectedTeamDetails));
		this.dataService.fireEvent('tournament_teams');
		this.navCtrl.pop();
	}
}
