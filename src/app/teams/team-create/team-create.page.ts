import { NavController } from '@ionic/angular';
import { UtilsService } from './../../utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-team-create',
	templateUrl: './team-create.page.html',
	styleUrls: ['./team-create.page.scss'],
})
export class TeamCreatePage implements OnInit {

	constructor(public utilService: UtilsService, public navCtrl: NavController) { }

	ngOnInit() {
	}

	addTeam() {
		this.utilService.presentLoadingWithOptions().then((a: any) => {
			this.utilService.loading.onDidDismiss().then(() => {
				this.navCtrl.navigateForward('type-of-team', { animationDirection: 'forward' });
			});
		});
	}
}
