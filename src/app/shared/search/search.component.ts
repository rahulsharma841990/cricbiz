import { ApiService } from './../../services/api.service';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

	public endPoint: any;
	public records: any = [];
	@ViewChild('input', { static: false }) inputElement: IonInput;
	searching: any = false;
	constructor(
		public utilService: UtilsService,
		public api: ApiService,
		public modalCtrl: ModalController
	) { }

	ngOnInit() {

	}

	searchRecords(keyWord) {
		let endPoint = this.endPoint;
		keyWord = keyWord.detail.value
		if (keyWord.trim() != '') {
			this.searching = true;
			this.api.request(endPoint + '/' + keyWord).then((res: any) => {
				this.records = res.records;
				this.searching = false;
			});
		}
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.inputElement.setFocus();
		}, 400);
	}

	selectRecord(record) {
		this.modalCtrl.dismiss(record);
	}

}
