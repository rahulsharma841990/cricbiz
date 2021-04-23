import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

	slideOpts = {
		initialSlide: 0,
		speed: 400,
		slidesPerView: 3,
		spaceBetween: 3,
		loop: true,
		freeMode: true,
		breakpoints: {
			640: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 6,
				spaceBetween: 1,
			}
		}
	};
	constructor(public navCtrl: NavController, public menu: MenuController) {
		this.menu.enable(true);
	}

	ngOnInit() {
		// document.body.classList.toggle('dark');
	}

	createTournament() {
		this.navCtrl.navigateForward('tournament-create');
	}

}
