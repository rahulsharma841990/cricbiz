import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {

	public loading: any;
	constructor(public loadingController: LoadingController) { }

	async presentLoadingWithOptions() {
		this.loading = await this.loadingController.create({
			spinner: 'circles',
			duration: 5000,
			message: 'Please wait..',
			translucent: true,
			cssClass: 'custom-class custom-loading',
			backdropDismiss: false
		});
		await this.loading.present();
	}
}
