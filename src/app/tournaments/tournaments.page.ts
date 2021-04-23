import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from './../services/utils.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';

@Component({
	selector: 'app-tournaments',
	templateUrl: './tournaments.page.html',
	styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

	@ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
	tournamentsList: any = [];
	selectedTab = 'my_tournaments';
	slideOpts = {
		initialSlide: 0,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		speed: 100
	};
	constructor(
		public alertController: AlertController,
		private utilService: UtilsService,
		private restService: ApiService,
		private navCtrl: NavController
	) { }

	ngOnInit() {
		this.utilService.presentLoadingWithOptions().then(() => {
			this.restService.request('tournaments').then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.tournamentsList = res.Data;
				console.log(this.tournamentsList);
			}, (err) => {
				this.utilService.loadingController.dismiss();
				this.utilService.presentToast('Something went wrong', 3000);
			})
		});
	}

	changeScreen(event) {
		let clickedSegment = event.detail.value;
		let objectIndexs = {
			"my_tournaments": 0,
			"my_matches": 1,
			"tournaments": 2,
			"teams": 3,
			"summary": 4,
			"gallery": 5,
			"scorecard": 6,
			"live": 7,
			"information": 8
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
			0: "my_tournaments",
			1: "my_matches",
			2: "tournaments",
			3: "teams",
			4: "summary",
			5: "gallery",
			6: "scorecard",
			7: "live",
			8: "information"
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

	viewTournament(tournament) {
		this.navCtrl.navigateForward(['tournaments/details', { tournament_id: tournament.tournament_id }])
	}

}
