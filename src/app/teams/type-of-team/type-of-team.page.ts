import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
	selector: 'app-type-of-team',
	templateUrl: './type-of-team.page.html',
	styleUrls: ['./type-of-team.page.scss'],
})
export class TypeOfTeamPage implements OnInit {

	constructor(public utilService: UtilsService, public navCtrl: NavController) { }

	ngOnInit() {
	}

	next() {
		this.utilService.presentLoadingWithOptions().then((a: any) => {
			this.utilService.loading.onDidDismiss().then(() => {
				this.navCtrl.navigateForward('add-friends', { animationDirection: 'forward' });
			});
		});
	}

}
