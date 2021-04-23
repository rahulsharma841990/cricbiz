import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-match-types',
	templateUrl: './match-types.page.html',
	styleUrls: ['./match-types.page.scss'],
})
export class MatchTypesPage implements OnInit {

	public teamType: any = 1;
	public selectedTournament: any = 0;
	public tournaments: any = [];
	constructor(private utilService: UtilsService, private apiService: ApiService, public navCtrl: NavController) { }

	ngOnInit() {
	}

	selectTeamtype(selectedTeam) {
		this.teamType = selectedTeam;
	}

	selectTournament(tournament) {
		this.selectedTournament = tournament.tournament_id
	}

	startMatch() {
		this.utilService.presentLoadingWithOptions().then(() => {
			let formData = {
				match_type: this.teamType
			};
			this.apiService.request('start/match', 'post', formData).then((res) => {
				this.utilService.loadingController.dismiss();
				this.navCtrl.navigateForward('starta-match');
			});
		});
	}

}
