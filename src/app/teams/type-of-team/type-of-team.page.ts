import { ApiService } from './../../services/api.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-type-of-team',
	templateUrl: './type-of-team.page.html',
	styleUrls: ['./type-of-team.page.scss'],
})
export class TypeOfTeamPage implements OnInit {

	public teamType: any = 1;
	public selectedTournament: any = 0;
	public tournaments: any = [];
	constructor(public utilService: UtilsService, public navCtrl: NavController, public api: ApiService) { }

	ngOnInit() {
		this.utilService.presentLoadingWithOptions().then(() => {
			this.api.request('tournaments').then((res: any) => {
				console.log(res);
				this.tournaments = res.Data;
				this.utilService.loadingController.dismiss();
			});
		});
	}

	next() {
		if (this.teamType == 1 && this.selectedTournament == 0) {
			this.utilService.presentToast('Please select tournament!', 3000);
			return false;
		}
		localStorage.setItem('selected_tournament_type', this.teamType);
		localStorage.setItem('selected_tournament', this.selectedTournament);
		this.navCtrl.navigateForward('team-create');
	}

	cancel() {
		this.navCtrl.navigateBack('dashboard');
	}

	selectTeamtype(selectedTeam) {
		this.teamType = selectedTeam;
	}

	selectTournament(tournament) {
		this.selectedTournament = tournament.tournament_id
	}

}
