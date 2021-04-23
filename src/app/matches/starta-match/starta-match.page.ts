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
	constructor(private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService, private datePicker: DatePicker) {
		this.subscriptions['route_subscription'] = this.route.params.subscribe((res) => {
			this.tournamentId = res.tournament_id;
			this.subscriptions['route_subscription'].unsubscribe();
		});
		localStorage.removeItem('match_id');
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
				this.team_a = matchDetails['team_b_details']['name'];
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
		this.navCtrl.navigateForward(['my-teams', { type: 'match', tournament_id: this.tournamentId, team_type: teamType }]);
	}

	// https://stackoverflow.com/questions/48686562/how-to-add-a-datepicker-in-ionic-3
	showDatepicker() {
		this.datePicker.show({
			date: new Date(),
			mode: 'date',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
		}).then(
			date => console.log('date: ', date),
			err => console.log('error ', err)
		);
	}

}
