import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';

@Component({
	selector: 'app-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

	@ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
	selectedTab = 'about';
	selectedTeams: any;
	tournamentId: number;
	tournamentDetails: any;
	tournamentTeams: any = [];
	routeSubscription: any;
	teamSubscription: any;
	slideOpts = {
		initialSlide: 0,
		speed: 200,
		autoHeight: true
	};
	constructor(
		private navCtrl: NavController,
		private dataService: DataService,
		private utilService: UtilsService,
		private restService: ApiService,
		private route: ActivatedRoute,
		private alertController: AlertController
	) {
		this.routeSubscription = this.route.params.subscribe((res) => {
			this.tournamentId = res.tournament_id;
			this.utilService.presentLoadingWithOptions().then(() => {
				this.restService.request('tournament/' + this.tournamentId).then((res: any) => {
					this.utilService.loadingController.dismiss();
					this.tournamentDetails = res.tournament;
					console.log(res);
					this.tournamentTeams = res.tournament.teams;
				});
			});
		});
	}

	ngOnInit() {

	}

	ionViewDidLeave() {
		this.routeSubscription.unsubscribe();
	}

	changeScreen(event) {
		let clickedSegment = event.detail.value;
		let objectIndexs = {
			"about": 0,
			"matches": 1,
			"sponsors": 2,
			"teams": 3,
			"point_table": 4
		}
		document.getElementById(clickedSegment).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
		this.SwipedTabsSlider.slideTo(objectIndexs[clickedSegment], 300);
	}

	changeSlide(event) {
		let objectIndexs = {
			0: "about",
			1: "matches",
			2: "sponsors",
			3: "teams",
			4: "point_table",
		}
		this.SwipedTabsSlider.getActiveIndex().then((index) => {
			this.selectedTab = objectIndexs[index];
			document.getElementById(objectIndexs[index]).scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			});
		});
	}

	addTeams() {
		this.teamSubscription = this.dataService.observeMe().subscribe((res) => {
			if (res.type == 'tournament_teams') {
				let selectedTeams = JSON.parse(localStorage.getItem('selected_teams_for_tournament'));
				this.selectedTeams = selectedTeams;
				this.utilService.presentLoadingWithOptions().then(() => {
					let formData = {
						teams: JSON.stringify(this.selectedTeams),
						tournament_id: this.tournamentId
					}
					this.restService.request('tournament/teams/save', 'post', formData).then((res: any) => {
						this.utilService.loadingController.dismiss();
						this.tournamentTeams = res.tournament.teams;
						console.log(this.tournamentTeams);
						this.teamSubscription.unsubscribe();
					});
				});
			}
		});
		this.navCtrl.navigateForward(['my-teams', { type: 'tournament' }]);
	}

	async removeTeam(team) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Are you sure to delete?',
			message: 'Remove team from tournament?',
			buttons: [
				{
					text: 'NO',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				}, {
					text: 'Yes',
					handler: () => {
						this.utilService.presentLoadingWithOptions().then(() => {
							let formData = {
								tournament_id: this.tournamentId,
								team_id: team.team_id
							}
							this.restService.request('delete/tournament/team', 'post', formData).then((res: any) => {
								this.utilService.loadingController.dismiss();
								this.tournamentTeams = res.tournament.teams;
								console.log(res);
							});
						});
					}
				}
			]
		});

		await alert.present();
	}

	selecRound() {
		this.navCtrl.navigateForward(['select-round', { tournament_id: this.tournamentId }]);
	}

}
