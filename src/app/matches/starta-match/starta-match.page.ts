import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { DataService } from './../../services/data.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
	selector: 'app-starta-match',
	templateUrl: './starta-match.page.html',
	styleUrls: ['./starta-match.page.scss'],
})
export class StartaMatchPage implements OnInit {

	private subscriptions: any = [];
	private tournamentId: any;
	private team_a: any = 'Select Team A';
	private team_b: any = 'Select Team B';
	private selectedBal: any;
	private over_type: any;
	private no_of_overs: any;
	private over_per_bowler: any;
	private city_town: any;
	private ground: any;
	private date_time: any;
	constructor(
		private navCtrl: NavController,
		private route: ActivatedRoute,
		private dataService: DataService,
		private datePicker: DatePicker,
		private utilService: UtilsService,
		private restService: ApiService
	) {
		this.subscriptions['route_subscription'] = this.route.params.subscribe((res) => {
			if (res.tournament_id != undefined) {
				this.tournamentId = res.tournament_id;
			}
			this.subscriptions['route_subscription'].unsubscribe();
		});
		// localStorage.removeItem('match_id');
	}

	ngOnInit() {
		this.subscriptions['match_subscription'] = this.dataService.observeMe().subscribe((res) => {
			if (res.type == 'match_selected') {
				let matchDetails = localStorage.getItem('match_id');
				if (matchDetails != null && matchDetails != undefined) {
					matchDetails = JSON.parse(matchDetails);
					if (matchDetails['team_a_details'] != null) {
						this.team_a = matchDetails['team_a_details']['name'];
					}
					if (matchDetails['team_b_details'] != null) {
						this.team_b = matchDetails['team_b_details']['name'];
					}
				}
			}
		});

		let matchDetails = localStorage.getItem('match_id');
		if (matchDetails != null && matchDetails != undefined) {
			matchDetails = JSON.parse(matchDetails);
			if (matchDetails['team_a_details'] != null) {
				this.team_a = matchDetails['team_a_details']['name'];
			}
			if (matchDetails['team_b_details'] != null) {
				this.team_b = matchDetails['team_b_details']['name'];
			}
			console.log(matchDetails);
		}
	}

	ionViewDidLeave() {
		this.subscriptions['']
	}

	selectTeam(teamType) {
		if (teamType == 'A') {
			if (this.team_a != 'Select Team A') {
				return false;
			}
		}
		if (teamType == 'B') {
			if (this.team_b != 'Select Team B') {
				return false;
			}
		}
		let params = { type: 'match', team_type: teamType }
		if (this.tournamentId != undefined) {
			params['tournament_id'] = this.tournamentId;
		}
		this.navCtrl.navigateForward(['my-teams', params]);
	}

	// https://stackoverflow.com/questions/48686562/how-to-add-a-datepicker-in-ionic-3
	showDatepicker() {
		this.datePicker.show({
			date: new Date(),
			mode: 'date',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
		}).then((date) => {
			console.log(date);
		});
	}

	selectMatchOfficial() {
		this.navCtrl.navigateForward('match-official');
	}

	selectBal(bal) {
		this.selectedBal = bal;
	}

	saveMatchStartToss() {
		let matchDetails = JSON.parse(localStorage.getItem('match_id'));
		let umpire = localStorage.getItem('umpire');
		let scorer = localStorage.getItem('scorer');
		let match_refree = localStorage.getItem('match_refree');
		let live = localStorage.getItem('live');
		if (umpire == undefined || umpire == null || scorer == undefined ||
			scorer == null || match_refree == undefined || match_refree == null || live == null) {
			this.utilService.presentToast('Please select match officials first', 3000);
			return false;
		}
		let matchOfficials = {
			umpire: JSON.parse(umpire),
			scorer: JSON.parse(scorer),
			match_refree: JSON.parse(match_refree),
			live: JSON.parse(live)
		}
		let formData = {
			selectedBal: this.selectBal,
			over_type: this.over_type,
			no_of_overs: this.no_of_overs,
			over_per_bowler: this.over_per_bowler,
			city_town: this.city_town,
			ground: this.ground,
			date_time: this.date_time,
			match_officials: matchOfficials
		}
		localStorage.setItem('match_data', JSON.stringify(formData));
		if (Object.values(formData).includes(undefined)) {
			this.utilService.presentToast('Please fill all details', 3000);
			return false;
		}
		this.utilService.presentLoadingWithOptions().then(() => {
			this.restService.request('match/update/' + matchDetails.id, 'post', formData).then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.navCtrl.navigateForward('match-toss');
			});
		});
	}
}
