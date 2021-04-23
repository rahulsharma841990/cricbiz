import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-of-players',
	templateUrl: './list-of-players.page.html',
	styleUrls: ['./list-of-players.page.scss'],
})
export class ListOfPlayersPage implements OnInit {

	public teamPlayers: any = [];
	public completeListOfPlayers: any = [];
	public teamDetails: any;
	public term: any;
	constructor(public navCtrl: NavController,
		private activatedRoute: ActivatedRoute,
		private utilService: UtilsService,
		private restSerivice: ApiService
	) {
		this.activatedRoute.params.subscribe((res) => {
			this.teamDetails = res;
			this.utilService.presentLoadingWithOptions().then(() => {
				this.restSerivice.request('team/players/' + res.team_id).then((res: any) => {
					this.utilService.loadingController.dismiss();
					this.teamPlayers = res.players;
					this.completeListOfPlayers = res.players
				});
			});
		});
	}

	ngOnInit() {
	}

	addPlayer() {
		this.navCtrl.navigateForward(['add-player-to-team', this.teamDetails]);
	}

}
