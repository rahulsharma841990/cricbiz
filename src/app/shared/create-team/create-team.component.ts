import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SearchComponent } from 'src/app/shared/search/search.component';

@Component({
	selector: 'app-create-team',
	templateUrl: './create-team.component.html',
	styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {

	public isImageSelected: boolean = false;
	public isButtonDisabled: boolean = false;
	public selectedImage: any = '';
	public formData = {
		'city_id': 0,
		'city_name': '',
		'name': ''
	};
	constructor(
		public utilService: UtilsService,
		public navCtrl: NavController,
		public camera: Camera,
		public actionSheetController: ActionSheetController,
		public modalCtrl: ModalController,
		public api: ApiService
	) { }

	ngOnInit() {
	}

	public takePicture(type) {
		const options: CameraOptions = {
			quality: 50,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: type
		}
		this.camera.getPicture(options).then((imageData) => {
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.selectedImage = base64Image;
			this.isImageSelected = true;
		}, (err) => {
		});
	}

	public async insertLogo() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Select Image',
			cssClass: 'my-custom-class',
			buttons: [{
				text: 'Gallery',
				icon: 'images',
				handler: () => {
					this.takePicture(0);
				}
			}, {
				text: 'Camera',
				icon: 'camera',
				handler: () => {
					this.takePicture(1);
				}
			}]
		});
		await actionSheet.present();
	}

	async openSearch() {
		let modal = await this.modalCtrl.create({
			component: SearchComponent,
			componentProps: { titleText: 'Search City', endPoint: 'search/city' }
		});
		modal.onDidDismiss().then((data: any) => {
			this.formData['city_id'] = data.data.id;
			this.formData['city_name'] = data.data.name;
		});
		return await modal.present();
	}

	public saveTeam() {
		this.isButtonDisabled = true;
		if (this.formData['name'] == '' || this.formData['city_id'] == 0) {
			this.utilService.presentToast('Please enter all details', 1000).then(() => {
				this.utilService.toast.onDidDismiss().then(() => {
					this.isButtonDisabled = false;
				});
			});
			return false;
		}
		// if (this.selectedImage == false) {
		// 	this.utilService.presentToast('Please select the logo', 1000).then(() => {
		// 		this.utilService.toast.onDidDismiss().then(() => {
		// 			this.isButtonDisabled = false;
		// 		});
		// 	});
		// 	return false;
		// }
		this.utilService.presentLoadingWithOptions().then(() => {
			this.formData['logo'] = this.selectedImage;
			this.api.request('createTeam', 'post', this.formData).then((res: any) => {
				this.isButtonDisabled = false;
				this.utilService.loadingController.dismiss();
				this.navCtrl.navigateForward(['list-of-players', res.Data]);
			}).catch(error => {
				this.isButtonDisabled = false;
				this.utilService.loadingController.dismiss();
				this.utilService.presentToast(error.error.Message, 2000);
			});
		});
		console.log(this.formData, this.selectedImage);
	}

}
