import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {

	public loading: any;
	public toast: any;
	private subject = new Subject<any>();
	constructor(public loadingController: LoadingController, public toastController: ToastController) { }

	async presentLoadingWithOptions() {
		this.loading = await this.loadingController.create({
			spinner: 'circles',
			message: 'Please wait..',
			translucent: true,
			cssClass: 'custom-class custom-loading',
			backdropDismiss: false
		});
		await this.loading.present();
	}


	async showLoading(message = 'Please wait...') {
		this.loading = await this.loadingController.create({
			spinner: 'crescent',
			message: message,
			translucent: true,
			cssClass: 'custom-class custom-loading',
			backdropDismiss: false
		});
		await this.loading.present();
	}

	async presentToast(message, duration, position: any = "top") {
		this.toast = await this.toastController.create({
			message: message,
			duration: duration,
			position: position,
		});
		return this.toast.present();
	}

	fireEvent(type: string) {
		this.subject.next({ type: type });
	}

	observeMe(): Observable<any> {
		return this.subject.asObservable();
	}
}
