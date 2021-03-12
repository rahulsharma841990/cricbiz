import { ApiService } from 'src/app/api.service';
import { UtilsService } from './../../utils.service';
import { SelectGroundComponent } from './../../shared/select-ground/select-ground.component';
import { CityComponent } from './../../shared/city/city.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import * as $ from 'jquery'

@Component({
	selector: 'app-tournament-create',
	templateUrl: './tournament-create.page.html',
	styleUrls: ['./tournament-create.page.scss'],
})
export class TournamentCreatePage implements OnInit {

	public logoImages: any = [];
	public isBannerInserted: any = false;
	public bannerImage: any = '';
	public formData = {
		tournamentName: '',
		cityName: '',
		ground: '',
		organizerName: '',
		organizerNumber: '',
		allowPlayContact: '',
		startDate: '',
		endDate: '',
		categories: '',
		ballType: '',
		numberOfOvers: '',
		tags: '',
		details: '',
		cityId: ''
	};
	items = ['Pizza', 'Pasta', 'Parmesan'];
	constructor(
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public utilService: UtilsService,
		public alertController: AlertController,
		public actionSheetController: ActionSheetController,
		public camera: Camera,
		private crop: Crop,
		public file: File,
		public api: ApiService
	) {
	}

	ngOnInit() {
		this.utilService.observeMe().subscribe((type) => {
			if (type.type == 'city') {
				let state = localStorage.getItem('state_name');
				let city = localStorage.getItem('city_name');
				this.formData['cityName'] = state + '/' + city;
				this.formData['cityId'] = localStorage.getItem('city_id');
			}
		});
	}

	selectBal(ballType) {
		this.formData['ballType'] = ballType;
	}

	async selectCity() {
		localStorage.removeItem('state_id');
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
		this.utilService.presentLoadingWithOptions().then((a: any) => {
			this.utilService.loading.onDidDismiss().then(() => {
				this.navCtrl.navigateForward('team-create', { animationDirection: 'forward' });
			});
		});
	}

	async logoCaption(imageObject) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Logo Caption ',
			inputs: [
				{
					name: 'title',
					placeholder: 'Caption'
				}
			],
			subHeader: 'Tournament Logo',
			message: 'Enter Logo Caption',
			buttons: [{
				text: 'Insert Logo',
				handler: data => {
					imageObject['caption'] = data.title;
					this.logoImages.push(imageObject);
				}
			}]
		});
		await alert.present();
	}

	public async insertLogo(clickFrom) {
		const actionSheet = await this.actionSheetController.create({
			header: 'Select Image',
			cssClass: 'my-custom-class',
			buttons: [{
				text: 'Gallery',
				icon: 'images',
				handler: () => {
					this.takePicture(0, clickFrom);
				}
			}, {
				text: 'Camera',
				icon: 'camera',
				handler: () => {
					this.takePicture(1, clickFrom);
				}
			}]
		});
		await actionSheet.present();
	}


	public takePicture(type, clickFrom) {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: type
		}
		this.camera.getPicture(options).then((imageData) => {
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			if (clickFrom == 'logo') {
				let imageObject = {};
				imageObject['image'] = base64Image;
				this.logoCaption(imageObject);
			} else if (clickFrom == 'banner') {
				this.isBannerInserted = true;
				this.bannerImage = base64Image;
			}
		}, (err) => {
		});
	}

	public deleteLogo(index) {
		this.deleteAlert('Delete Logo', 'Are you sure to delete the logo?', (data) => {
			this.logoImages.splice(index, 1);
		});
	}

	async deleteAlert(header, message, handle) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: header,
			message: message,
			buttons: [{
				text: 'Yes',
				handler: handle
			}, {
				text: 'No',
				role: 'cancel'
			}
			]
		});
		await alert.present();
	}

	public removeBanner() {
		this.deleteAlert('Delete Banner', 'Are you sure to remove banner image?', (data) => {
			this.bannerImage = '';
			this.isBannerInserted = false;
		});
	}

	public setCategory(category) {
		this.formData['categories'] = category;
	}


	public saveTournament() {
		Object.keys(this.formData).some((key, value) => {
			if (this.formData[key] === '') {
				this.utilService.presentToast('Please enter ' + key + ' details', 3000);
				console.log(key);
				return key;
			}
		});
		if (this.bannerImage == '' || this.logoImages.length == 0) {
			this.utilService.presentToast('Please select banner and logos', 3000);
			return false;
		}
		this.utilService.presentLoadingWithOptions().then(() => {
			this.formData['bannerImg'] = this.bannerImage;
			this.formData['logo'] = this.logoImages;
			this.api.request('createTournament', 'post', this.formData).then((res: any) => {
				this.utilService.loadingController.dismiss();
				if (res.Success == 'True') {
					this.utilService.presentToast('Tournament created successfully!', 3000);
					this.navCtrl.navigateRoot('tournaments', { animationDirection: 'forward' });
				} else {
					this.utilService.presentToast('Something went wrong, please try again!', 3000);
				}
			});
		});
	}
}
