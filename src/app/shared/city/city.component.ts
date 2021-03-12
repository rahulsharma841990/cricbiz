import { ModalController } from '@ionic/angular';
import { ApiService } from './../../api.service';
import { UtilsService } from './../../utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {

	records: any = [];
	recordsForSearch: any = [];
	titleText = 'Search State';
	modalType: any = '';
	constructor(public utilService: UtilsService, public api: ApiService, public modalCtrl: ModalController) {

		let stateId = localStorage.getItem('state_id');
		if (stateId == undefined || stateId == null) {
			this.utilService.presentLoadingWithOptions().then(() => {
				this.api.request('states?country_id=101').then((res: any) => {
					this.records = res.Data;
					this.recordsForSearch = res.Data;
					this.utilService.loadingController.dismiss();
					this.modalType = 'state';
				});
			});
		} else {
			this.titleText = 'Search City/Town'
			this.utilService.presentLoadingWithOptions().then(() => {
				this.api.request('cities?country_id=101&state_id=' + stateId).then((res: any) => {
					this.records = res.Data;
					this.recordsForSearch = res.Data;
					this.utilService.loadingController.dismiss();
					this.modalType = 'city';
				});
			});
		}
	}

	ngOnInit() { }

	getCities(record) {
		if (this.modalType == 'state') {
			localStorage.setItem('state_id', record.id);
			localStorage.setItem('state_name', record.name);
			this.selectCity();
		} else {
			localStorage.setItem('city_id', record.id);
			localStorage.setItem('city_name', record.name);
			this.modalCtrl.dismiss();
			this.utilService.fireEvent('city');
		}
	}

	async selectCity() {
		this.modalCtrl.dismiss();
		let modal = await this.modalCtrl.create({
			component: CityComponent
		});
		return await modal.present();
	}


	async filterList(evt) {
		this.records = this.recordsForSearch;
		const searchTerm = evt.srcElement.value;

		if (!searchTerm) {
			this.records = this.recordsForSearch;
			return;
		}

		this.records = this.records.filter(currentFood => {
			if (currentFood.name && searchTerm) {
				return (currentFood.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
			}
		});
	}

}
