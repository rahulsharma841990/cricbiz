import { SelectGroundComponent } from './../../shared/select-ground/select-ground.component';
import { CityComponent } from './../../shared/city/city.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import * as $ from 'jquery'

@Component({
	selector: 'app-tournament-create',
	templateUrl: './tournament-create.page.html',
	styleUrls: ['./tournament-create.page.scss'],
})
export class TournamentCreatePage implements OnInit {

	constructor(public modalCtrl: ModalController, public navCtrl: NavController) {
	}

	ngOnInit() {

	}

	selectBal(ballType, event) {
		$('.ball').removeClass('active');
		$(event.target).parent('.ball').addClass('active')
	}

	async selectCity() {
		let modal = await this.modalCtrl.create({
			component: CityComponent
		});
		return await modal.present();
	}

	async selectGround() {
		let modal = await this.modalCtrl.create({
			component: SelectGroundComponent
		});
		return await modal.present();
	}

	next() {
		this.navCtrl.navigateForward('team-create', { animationDirection: 'forward' });
	}
}
