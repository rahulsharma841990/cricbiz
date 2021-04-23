import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.page.html',
	styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

	otpCode: any = [];
	constructor(
		public utilService: UtilsService,
		public navCtrl: NavController
	) { }

	ngOnInit() {
		let otpCode = localStorage.getItem('otp');
		var digits = otpCode.toString().split('');
		var realDigits = digits.map(Number)
		this.otpCode = realDigits;
	}

	verifyOtp() {
		let otpCode = parseInt(this.otpCode.join(''));
		let savedOtp = parseInt(localStorage.getItem('otp'));
		if (otpCode == savedOtp) {
			localStorage.removeItem('otp');
			this.navCtrl.navigateRoot('dashboard', { animationDirection: 'forward' });
		} else {
			this.utilService.presentToast('Incorrect OTP', 3000);
			return false;
		}
	}

}
