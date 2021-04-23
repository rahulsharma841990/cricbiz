import { DataService } from './../../services/data.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select-round',
	templateUrl: './select-round.page.html',
	styleUrls: ['./select-round.page.scss'],
})
export class SelectRoundPage implements OnInit {

	private subscriptions: any = [];
	private selectedRounds: any = [];
	private activeRound: any;
	private tournamentId: any;
	constructor(
		private utilService: UtilsService,
		private apiService: ApiService,
		private route: ActivatedRoute,
		private navCtrl: NavController,
		private dataService: DataService,
	) {
		this.subscriptions['tournament_id'] = this.route.params.subscribe((res) => {
			this.tournamentId = res.tournament_id;
			this.getTournamentrounds();
			this.subscriptions['tournament_id'].unsubscribe();
		})
	}

	ngOnInit() {
	}

	selectRounds() {
		this.dataService.observeMe().subscribe((res) => {
			if (res.type == 'rounds_selected') {
				this.getTournamentrounds();
				this.subscriptions['tournament_id'].unsubscribe();
			}
		});
		this.navCtrl.navigateForward(['add-rounds', { tournament_id: this.tournamentId }]);
	}

	getTournamentrounds() {
		this.utilService.presentLoadingWithOptions().then(() => {
			this.apiService.request('tournament/rounds/' + this.tournamentId).then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.subscriptions['tournament_id'].unsubscribe();
				this.selectedRounds = res.rounds;
			});
		});
	}

	setActiveRound(round) {
		this.activeRound = round.id;
	}

	selectMatchTeams() {
		if (this.activeRound != '' && this.activeRound != null) {
			localStorage.setItem('selected_round', this.activeRound);
			this.navCtrl.navigateForward(['starta-match', { tournament_id: this.tournamentId }]);
		} else {
			this.utilService.presentToast('Please select the round first', 3000);
		}
	}

}
