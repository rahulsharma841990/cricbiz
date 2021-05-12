import { UtilsService } from './../../services/utils.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-match-toss',
	templateUrl: './match-toss.page.html',
	styleUrls: ['./match-toss.page.scss'],
})
export class MatchTossPage implements OnInit {

	team_a: any;
	team_b: any;
	selectedTeam: any;
	selectedElect: any;
	constructor(public navCtrl: NavController, public utilService: UtilsService) { }

	ngOnInit() {
		let matchDetails = JSON.parse(localStorage.getItem('match_id'));
		this.team_a = matchDetails.team_a_details.name
		this.team_b = matchDetails.team_b_details.name
	}

	selectTeam(type) {
		this.selectedTeam = type;
	}

	selectElected(elected) {
		this.selectedElect = elected;
	}

	startVirtualToss() {
		this.navCtrl.navigateForward('virtual-toss');
	}

	done() {
		this.navCtrl.pop();
	}

	play() {
		if (this.selectedTeam == undefined || this.selectedElect == undefined) {
			this.utilService.presentToast('Please select team', 3000);
			return false;
		}
		this.navCtrl.navigateForward('striker');
	}
}
