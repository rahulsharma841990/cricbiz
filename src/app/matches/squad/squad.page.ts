import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-squad',
	templateUrl: './squad.page.html',
	styleUrls: ['./squad.page.scss'],
})
export class SquadPage implements OnInit {

	public teamPlayers: any = [];
	public selectedPlayers: any = [];
	public teamDetails: any = [];
	private subscriptions: any = [];
	private tournamentId: any;
	private teamType: any;
	constructor(
		public activatedRoute: ActivatedRoute,
		private utilService: UtilsService,
		private restService: ApiService,
		private navCtrl: NavController
	) {
		this.subscriptions['route_subscriptions'] = this.activatedRoute.params.subscribe((res) => {
			this.teamDetails = res;
			this.tournamentId = res.tournament_id;
			this.teamType = res.team_type;
			this.utilService.presentLoadingWithOptions().then(() => {
				this.restService.request('team/players/' + res.team_id).then((res: any) => {
					this.utilService.loadingController.dismiss();
					this.teamPlayers = res.players;
					this.subscriptions['route_subscriptions'].unsubscribe();
				});
			});
		});
	}

	ngOnInit() {
	}

	selectPlayer(player) {
		if (this.selectedPlayers.includes(player.player_id)) {
			this.selectedPlayers.splice(this.selectedPlayers.indexOf(player.player_id), 1);
		} else {
			this.selectedPlayers.push(player.player_id);
		}
	}

	next() {
		if (this.selectedPlayers.length < 2) {
			this.utilService.presentToast('Please select at least two players', 3000);
			return false
		}
		let data = {
			team_id: this.teamDetails.team_id,
			selected_players: this.selectedPlayers,
			tournament_id: this.tournamentId,
			team_type: this.teamType
		}
		this.navCtrl.pop().then(() => {
			this.navCtrl.navigateForward(['select-captain', data]);
		});
	}
}