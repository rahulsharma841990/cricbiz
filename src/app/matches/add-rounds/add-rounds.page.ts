import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-rounds',
	templateUrl: './add-rounds.page.html',
	styleUrls: ['./add-rounds.page.scss'],
})
export class AddRoundsPage implements OnInit {

	roundsList: any = [];
	selectedRounds: any = [];
	tournamentId: any;
	subscriptions: any = [];
	constructor(
		private utilService: UtilsService,
		private apiService: ApiService,
		private navCtrl: NavController,
		private route: ActivatedRoute,
		private dataService: DataService
	) {
		this.utilService.presentLoadingWithOptions().then(() => {
			this.apiService.request('rounds').then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.roundsList = res.rounds
			});
		});
		this.subscriptions['tournament_subscription'] = this.route.params.subscribe((res) => {
			this.tournamentId = res.tournament_id;
			this.subscriptions['tournament_subscription'].unsubscribe();
		})
	}

	ngOnInit() {
	}

	saveSelectedRounds() {
		this.utilService.presentLoadingWithOptions().then(() => {
			let formData = {
				tournament_id: this.tournamentId,
				rounds: this.selectedRounds
			}
			this.apiService.request('tournament/rounds', 'post', formData).then((res) => {
				this.utilService.loadingController.dismiss();
				this.dataService.fireEvent('rounds_selected');
				console.log(res);
			});
		});
		this.navCtrl.pop();
	}

}
