import { DataService } from './../../services/data.service';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInput, ActionSheetController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-create-match-official',
	templateUrl: './create-match-official.component.html',
	styleUrls: ['./create-match-official.component.scss'],
})
export class CreateMatchOfficialComponent implements OnInit {

	@Input() type: any;
	records: any = [];
	showNoRecord: any = false;
	createNew: any = false;
	searching: any;
	selectedImage: any = null;
	name: any;
	mobile: any;
	@ViewChild('input', { static: false }) inputElement: IonInput;
	constructor(
		private utilService: UtilsService,
		private apiService: ApiService,
		public camera: Camera,
		public actionSheetController: ActionSheetController,
		private dataService: DataService,
		private modalController: ModalController
	) {
	}

	ngOnInit() {
	}

	searchUser(event) {
		if (event.detail.value != '') {
			this.searching = true;
			this.apiService.request('match/officials/' + this.type + '/' + event.detail.value.toLowerCase()).then((res: any) => {
				this.searching = false;
				this.records = res.match_officials;
				if (this.records.length == 0) {
					this.showNoRecord = true;
				} else {
					this.showNoRecord = false;
				}
			});
		}
	}

	addNew() {
		this.createNew = true;
	}

	public async insertImage() {
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

	public takePicture(type) {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: type
		}
		this.camera.getPicture(options).then((imageData) => {
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			console.log(base64Image);
		}, (err) => {
		});
	}

	createUser() {
		this.utilService.presentLoadingWithOptions().then(() => {
			let formData = {
				name: this.name,
				mobile: this.mobile,
				image: this.selectedImage,
				type: this.type
			}
			this.apiService.request('match/official/save', 'post', formData).then((res: any) => {
				this.utilService.loadingController.dismiss();
				this.putInlocalStorage(res.latest);
				this.dataService.fireEvent('officials');
				this.modalController.dismiss();
			});
		})
	}

	selectRecord(record) {
		this.putInlocalStorage(record);
		this.modalController.dismiss();
		this.dataService.fireEvent('officials');
	}

	putInlocalStorage(record) {
		if (this.type == 'scorer' || this.type == 'umpire') {
			let type: any = localStorage.getItem(this.type);
			if (type != null && type != undefined) {
				type = JSON.parse(type);
				type.push(record);
			} else {
				type = [];
				type.push(record);
			}
			localStorage.setItem(this.type, JSON.stringify(type));
		} else {
			localStorage.setItem(this.type, JSON.stringify(record));
		}
	}
}