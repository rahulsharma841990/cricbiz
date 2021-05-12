import { UtilsService } from 'src/app/services/utils.service';
import { PlayerSelectionComponent } from './../player-selection/player-selection.component';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-striker',
	templateUrl: './striker.page.html',
	styleUrls: ['./striker.page.scss'],
})
export class StrikerPage implements OnInit {

	striker_one: any = 'Select Striker';
	striker_two: any = 'Select Non-Striker';
	bowler: any = 'Select Bowler';
	constructor(
		public modalController: ModalController,
		public navCtrl: NavController,
		public utilService: UtilsService
	) { }

	ngOnInit() {
	}

	startInings() {
		if (this.striker_one == 'Select Striker' || this.striker_two == 'Select Non-Striker' || this.bowler == 'Select Bowler') {
			this.utilService.presentToast('Please select striker and bowlers', 3000);
			return false;
		}
		this.navCtrl.navigateForward('innings');
	}

	async selectStriker(type, number) {
		let modal = await this.modalController.create({
			component: PlayerSelectionComponent,
			componentProps: {
				type: type,
				number: number
			}
		});
		modal.onDidDismiss().then((res: any) => {
			if (type == 'Bat' && res.role == 1) {
				this.striker_one = res.data.player_profile.name;
				localStorage.setItem('striker_one', JSON.stringify(res.data.player_profile));
			} else if (type == 'Bat' && res.role == 2) {
				this.striker_two = res.data.player_profile.name
				localStorage.setItem('striker_two', JSON.stringify(res.data.player_profile));
			} else {
				this.bowler = res.data.player_profile.name;
				localStorage.setItem('bowler', JSON.stringify(res.data.player_profile));
			}
		});
		return await modal.present();
	}
}
