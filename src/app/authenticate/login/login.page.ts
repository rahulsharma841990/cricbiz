import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(public menu: MenuController, public navCtrl: NavController) {
		this.menu.enable(false);
	}

	ngOnInit() {
		// document.body.classList.toggle('dark');
	}

	gotoDashboard() {
		this.navCtrl.navigateRoot('otp', { animationDirection: 'forward' })
	}

}
