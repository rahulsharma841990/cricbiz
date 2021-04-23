import { AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CustomAlert, IonicCustomAlertService } from 'ionic-custom-alert';

export interface SampleAlertData {
	user: any;
	mobileNumberLastDigits: any;
}

@Component({
	selector: 'app-confirm-requested-user',
	templateUrl: './confirm-requested-user.component.html',
	styleUrls: ['./confirm-requested-user.component.scss'],
})
export class ConfirmRequestedUserComponent extends CustomAlert<SampleAlertData> {

	constructor(public utilService: UtilsService, public alertController: AlertController) {
		super();
	}
	addToMyTeam() {
		let userMobile = this.data.user.data.mobile.toString();
		if (userMobile.substr(userMobile.length - 5) == this.data.mobileNumberLastDigits) {
			alert('correct');
		} else {
			this.utilService.presentToast('Incorrect mobile number', 3000);
			this.alertController.dismiss();
		}
	}

}
