import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tournament-created',
	templateUrl: './tournament-created.page.html',
	styleUrls: ['./tournament-created.page.scss'],
})
export class TournamentCreatedPage implements OnInit {

	constructor(public navCtrl: NavController) { }

	ngOnInit() {
	}

	letsGo() {
		this.navCtrl.navigateRoot('dashboard', { animationDirection: 'back' });
	}

}
