import { DataService } from './../../services/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerSelectionComponent } from '../player-selection/player-selection.component';
import { OutTypeComponent } from '../out-type/out-type.component';

@Component({
	selector: 'app-out-how',
	templateUrl: './out-how.component.html',
	styleUrls: ['./out-how.component.scss'],
})
export class OutHowComponent implements OnInit {

	@Input() active_striker: any
	constructor(public alertController: AlertController, public modalController: ModalController, public dataService: DataService) { }

	ngOnInit() { }

	async confirm() {
		let alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Are you sure?',
			message: 'Confirmed Out?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				}, {
					text: 'Yes, I\' am Sure',
					handler: () => {
						this.selectStriker();
					}
				}
			]
		});
		await alert.present();
	}

	async selectStriker() {
		let modal = await this.modalController.create({
			component: PlayerSelectionComponent,
			componentProps: {
				type: 'Bat',
				number: this.active_striker
			}
		});
		modal.onDidDismiss().then((res: any) => {
			if (this.active_striker == 1) {
				localStorage.setItem('striker_one', JSON.stringify(res.data.player_profile));
				this.dataService.fireEvent('striker_one_update');
			} else {
				localStorage.setItem('striker_two', JSON.stringify(res.data.player_profile));
				this.dataService.fireEvent('striker_two_update');
			}
			setTimeout(() => {
				this.modalController.dismiss();
			}, 500);
		});
		return await modal.present();
	}

	async outOther(type, title) {
		let modal = await this.modalController.create({
			component: OutTypeComponent,
			componentProps: {
				type: type,
				title: title
			}
		});
		return await modal.present();
	}

}
