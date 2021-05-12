import { OutHowComponent } from './../out-how/out-how.component';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PlayerSelectionComponent } from '../player-selection/player-selection.component';
import * as $ from 'jQuery';

@Component({
	selector: 'app-innings',
	templateUrl: './innings.page.html',
	styleUrls: ['./innings.page.scss'],
})
export class InningsPage implements OnInit {

	public strikerOne: any;
	public strikerTwo: any;
	public bowler: any;
	public scores: any = [];
	public totalScore: any = 0;
	public numberOfBalls: any = 0;
	public overBalls: any = 0;
	public strikerOneScore: any = 0;
	public strikerTwoScore: any = 0;
	public strikerOneOver: any = 0;
	public strikerTwoOver: any = 0;
	public activeStriker: any = 1;
	public wideAndNoBallTotal: any = 1;
	public wideBallsArray: any = [];
	public noBallsArray: any = [];
	constructor(public navCtrl: NavController, public alertController: AlertController, public modalController: ModalController) {
		this.strikerOne = JSON.parse(localStorage.getItem('striker_one'));
		this.strikerTwo = JSON.parse(localStorage.getItem('striker_two'));
		this.bowler = JSON.parse(localStorage.getItem('bowler'));
	}

	ngOnInit() {
		let elem = this;
		$('body').on('keyup', '.scoreInput', function () {
			if ($(this).val() != '') {
				let value: any = $(this).val();
				value = parseInt(value);
				elem.wideAndNoBallTotal = value + 1;
			} else {
				elem.wideAndNoBallTotal = 1;
			}
			$('.total_score').html(elem.wideAndNoBallTotal);
			console.log(elem.wideAndNoBallTotal);
		});
	}

	setScore(score) {
		if (this.overBalls == 6) {
			this.presentAlert();
		} else {
			let scoreObject = {
				score: score,
				type: 'score'
			}
			this.scores.push(scoreObject);
			this.numberOfBalls++;
			this.overBalls++;
			this.totalScore += score;//this.scores.reduce((acc, cur) => acc + Number(cur), 0);
			if (this.activeStriker == 1) {
				this.strikerOneScore += score;
				this.strikerOneOver++;
			} else if (this.activeStriker == 2) {
				this.strikerTwoScore += score;
				this.strikerTwoOver++;
			}
			for (let i = 1; i <= score; i++) {
				if (this.activeStriker == 2) {
					this.activeStriker = 1;
				} else {
					this.activeStriker = 2;
				}
			}
			this.navCtrl.navigateForward('ground-map');
		}
	}

	async presentAlert() {
		let bowler = JSON.parse(localStorage.getItem('bowler'));
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Over Complete',
			subHeader: 'Over End',
			message: 'End of the over by ' + bowler.name,
			buttons: [
				{
					text: 'Start Next Over',
					handler: () => {
						this.selectStriker('Bowler');
					}
				}
			]
		});

		await alert.present();

		const { role } = await alert.onDidDismiss();
		console.log('onDidDismiss resolved with role', role);
	}

	async selectStriker(type, number = 0) {
		let modal = await this.modalController.create({
			component: PlayerSelectionComponent,
			componentProps: {
				type: type,
				number: number
			}
		});
		modal.onDidDismiss().then((res: any) => {
			this.scores = [];
			this.overBalls = 0;
			this.bowler = res.data.player_profile;
			localStorage.setItem('bowler', JSON.stringify(res.data.player_profile));
		});
		return await modal.present();
	}

	async wide_no_ball(type) {
		this.wideAndNoBallTotal = 0;
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: type + ' Ball',
			message: ((type == 'Wide') ? 'WB' : 'NB') + ' + Score = <span class="total_score">1</span> Run',
			inputs: [
				{
					name: 'score',
					type: 'number',
					placeholder: 'Score',
					cssClass: 'scoreInput'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					}
				}, {
					text: 'Ok',
					handler: () => {
						let score = 0;
						if (this.wideAndNoBallTotal == 0) {
							this.wideAndNoBallTotal = 1;
						}
						if (type == 'Wide') {
							this.wideBallsArray.push(this.wideAndNoBallTotal);
						} else if (type == 'No') {
							this.noBallsArray.push(this.wideAndNoBallTotal);
						}
						score = this.wideAndNoBallTotal;
						if (this.activeStriker == 1) {
							this.strikerOneScore += score;
						} else if (this.activeStriker == 2) {
							this.strikerTwoScore += score;
						}
						this.totalScore += score;
						let scoreObject = {
							score: score,
							type: type
						}
						this.scores.push(scoreObject);
					}
				}
			]
		});

		await alert.present();
	}


	async manual_score() {
		this.wideAndNoBallTotal = 0;
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Score by running',
			message: '4 and 6 will not be considered boundries',
			inputs: [
				{
					name: 'score',
					type: 'number',
					placeholder: 'Score',
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					}
				}, {
					text: 'Ok',
					handler: (data) => {
						this.setScore(parseInt(data.score));
					}
				}
			]
		});

		await alert.present();
	}

	async outHow() {
		let modal = await this.modalController.create({
			component: OutHowComponent,
			componentProps: {
				active_striker: this.activeStriker
			}
		});
		await modal.present();
	}
}
