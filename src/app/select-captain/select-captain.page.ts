import { DataService } from './../services/data.service';
import { NavController } from '@ionic/angular';
import { ApiService } from './../services/api.service';
import { UtilsService } from './../services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select-captain',
	templateUrl: './select-captain.page.html',
	styleUrls: ['./select-captain.page.scss'],
})
export class SelectCaptainPage implements OnInit {

	public players: any = [];
	public selectedPlayers: any = [];
	public selectedPlayertypeScreenTab = 'captain';
	public selectedCaptain: any = null;
	public selectedWicketKeeper: any = null;
	public selected12thMan: any = null;
	public routeParams: any;
	public subscriptions: any = [];
	constructor(
		public activatedRoute: ActivatedRoute,
		private utilService: UtilsService,
		private restService: ApiService,
		private navCtrl: NavController,
		private dataService: DataService
	) {
		this.subscriptions['route_subscription'] = this.activatedRoute.params.subscribe((res) => {
			this.selectedPlayers = res.selected_players.split(',');
			this.routeParams = res;
			this.subscriptions['route_subscription'].unsubscribe();
			this.utilService.presentLoadingWithOptions().then(() => {
				this.restService.request('team/players/' + res.team_id).then((res: any) => {
					this.utilService.loadingController.dismiss();
					this.players = res.players;
				});
			});
		});
	}

	ngOnInit() {
	}

	selectedPlayertypeScreen(screen) {
		this.selectedPlayertypeScreenTab = screen;
	}

	selectPlayer(player_id, type) {
		switch (type) {
			case 'captain':
				this.selectedCaptain = player_id;
				break;

			case 'wicket':
				this.selectedWicketKeeper = player_id;
				break;

			case '12th_me':
				this.selected12thMan = player_id;
				break;
		}
	}

	saveTeamToMatch() {
		this.utilService.presentLoadingWithOptions().then(() => {
			let formData = {
				team_id: this.routeParams.team_id,
				selected_players: this.routeParams.selected_players,
				tournament_id: this.routeParams.tournament_id,
				team_type: this.routeParams.team_type,
				captain: this.selectedCaptain,
				wicket_keeper: this.selectedWicketKeeper,
				twel_man: this.selected12thMan,
				selected_round: localStorage.getItem('selected_round')
			}
			let existingMatch = localStorage.getItem('match_id');
			if (existingMatch != null && existingMatch != undefined) {
				existingMatch = JSON.parse(existingMatch);
				formData['match_id'] = existingMatch['id']
			}
			this.restService.request('match/save', 'post', formData).then((res: any) => {
				localStorage.setItem('match_id', JSON.stringify(res.match_details));
				this.utilService.loadingController.dismiss();
				this.dataService.fireEvent('match_selected');
				this.navCtrl.pop();
			})
		});
	}
}
