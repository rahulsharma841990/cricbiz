import { UtilsService } from './../../utils.service';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
	selector: 'app-add-friends',
	templateUrl: './add-friends.page.html',
	styleUrls: ['./add-friends.page.scss'],
})
export class AddFriendsPage implements OnInit {
	addfriendsType: string = 'follow';
	isAndroid: boolean = false;

	constructor(platform: Platform, public utilService: UtilsService, public navCtrl: NavController) {
		this.isAndroid = platform.is('android');
	}

	ngOnInit() { }

	next() {
		this.utilService.presentLoadingWithOptions().then((a: any) => {
			this.utilService.loading.onDidDismiss().then(() => {
				this.navCtrl.navigateForward('online-players', { animationDirection: 'forward' });
			});
		});
	}
}
