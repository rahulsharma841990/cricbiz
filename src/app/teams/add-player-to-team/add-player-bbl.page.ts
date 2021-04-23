import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { ConfirmRequestedUserComponent } from './../../shared/confirm-requested-user/confirm-requested-user.component';
import { SearchComponent } from './../../shared/search/search.component';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName, ContactFindOptions } from '@ionic-native/contacts/ngx';
import { QrScannerComponent } from 'src/app/shared/qr-scanner/qr-scanner.component';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { IonicCustomAlertService } from 'ionic-custom-alert';
import { SampleAlertData } from 'src/app/shared/confirm-requested-user/confirm-requested-user.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-add-player-bbl',
	templateUrl: './add-player-bbl.page.html',
	styleUrls: ['./add-player-bbl.page.scss'],
})
export class AddPlayerBblPage implements OnInit {
	bblplayers: string = 'network';
	isAndroid: boolean = false;
	showQr: any = false;
	allContacts: any;
	user: any;
	headerTitle: any;
	mobileNumberLastDigits: any;
	mobileNumberForFind: any;
	isUserExist: any = true;
	isExistingPlayer: any = false;
	teamDetails: any;
	newPlayerName: any;
	existingUserDetails: any;
	constructor(
		private contacts: Contacts,
		public modalController: ModalController,
		private qrScanner: QRScanner,
		public customAlertService: IonicCustomAlertService,
		private route: ActivatedRoute,
		private utilService: UtilsService,
		private restService: ApiService,
		private navCtrl: NavController
	) {
		this.route.params.subscribe(params => {
			this.headerTitle = 'Add Player to ' + params.name;
			this.teamDetails = params;
			console.log(params);
		});
	}

	ngOnInit() {

	}

	getContacts() {
		this.contacts.pickContact().then((res) => {
			console.log(res);
		});
	}

	async scanQr() {
		this.showModal().then(() => {
			this.showQr = true;
		});
	}

	async showModal() {
		const modal = await this.modalController.create({
			component: QrScannerComponent,
			cssClass: 'qr-scanner-modal'
		});
		modal.onDidDismiss().then(() => {
			this.showQr = false;
			this.qrScanner.hide();
		});
		return await modal.present();
	}

	async searchTeamPlayer() {
		const modal = await this.modalController.create({
			component: SearchComponent,
			showBackdrop: false,
			componentProps: {
				titleText: 'Search Player',
				endPoint: 'search/player'
			}
			//enterAnimation: modalEnterAnimation,
			// leaveAnimation: modalLeaveAnimation,
		});
		modal.onDidDismiss().then((res) => {
			this.user = res;
			console.log(this.user);
			this.verifyRequestedTeamPlayerBySearch();
		});
		return await modal.present();
	}

	async verifyRequestedTeamPlayerBySearch() {
		const data: SampleAlertData = {
			user: this.user,
			mobileNumberLastDigits: this.mobileNumberLastDigits
		};
		const popup = await this.customAlertService.create({
			header: 'Want to add ' + this.user.data.name + '?',
			message: 'Please enter last 5-digits of ' + this.user.data.name + '\'s mobile number to add him to your team',
			type: ConfirmRequestedUserComponent,
			componentData: data,
			cssClass: 'confirm-alert'
		});
		await popup.onDidDismiss();
		this.user = data.user;
		console.log(this.user);
	}

	findPlayer() {
		if (this.mobileNumberForFind == undefined || this.mobileNumberForFind == '' || this.mobileNumberForFind.toString().length < 10) {
			this.utilService.presentToast('Please provide correct phone number', 3000);
			return false;
		}
		this.utilService.presentLoadingWithOptions().then(() => {
			this.restService.request('find/team/player/' + this.mobileNumberForFind).then((res: any) => {
				this.utilService.loadingController.dismiss();
				if (!res.is_user_exists) {
					this.isUserExist = false;
					this.isExistingPlayer = false;
				} else {
					this.isUserExist = true;
					this.isExistingPlayer = true;
				}
				this.existingUserDetails = res.user
				console.log(res);
			});
		});
	}

	addNewPlayerIntoTeam() {
		if (this.newPlayerName == undefined || this.newPlayerName == '' || this.mobileNumberForFind == undefined || this.mobileNumberForFind == '') {
			this.utilService.presentToast('Please enter player name', 3000);
			return false;
		}

		this.utilService.presentLoadingWithOptions().then(() => {
			let formData = {
				mobile: this.mobileNumberForFind,
				name: this.newPlayerName,
				team_id: this.teamDetails.team_id
			}
			this.restService.request('team/player/create', 'post', formData).then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.navCtrl.pop();
				console.log(res);
			});
		});
	}

	addExistingPlayerIntoTeam() {
		console.log(this.teamDetails, this.existingUserDetails);
	}

}
