import { UtilsService } from 'src/app/utils.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { ApiService } from 'src/app/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	country: any = '';
	phone: any = '';
	constructor(public utilService: UtilsService,
		public apiService: ApiService,
		public firebase: FirebaseX,
		public menu: MenuController,
		public navCtrl: NavController,
		private firebaseAuthentication: FirebaseAuthentication,
	) {
		this.menu.enable(false);
		// this.firebase.hasPermission().then(() => {
		// 	this.firebase.verifyPhoneNumber('+919803675124', 120).then(() => {
		// 		console.log('here');
		// 	})
		// });
	}

	ngOnInit() {
		// document.body.classList.toggle('dark');
	}

	gotoDashboard() {
		this.navCtrl.navigateRoot('otp', { animationDirection: 'forward' })
	}

	sendOtp() {
		if (this.phone == '' || this.country == '') {
			this.utilService.presentToast('Please enter mobile number', 3000);
			return false;
		}
		this.utilService.showLoading().then(() => {
			let data = {
				email_or_mobile: this.country + this.phone
			}
			this.apiService.request('login', 'post', data).then((res: any) => {
				this.utilService.loading.dismiss();
				if (res.status == true) {
					localStorage.setItem('otp', res.user.OTPcode);
					localStorage.setItem('user', JSON.stringify(res.user));
					window.sessionStorage.setItem('accessToken', res.accessToken);
					this.navCtrl.navigateRoot('otp', { animationDirection: 'forward' });
				}
			})
		});
	}

}
