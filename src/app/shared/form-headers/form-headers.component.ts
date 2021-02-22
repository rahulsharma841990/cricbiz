import { ModalController, NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-form-headers',
	templateUrl: './form-headers.component.html',
	styleUrls: ['./form-headers.component.scss'],
})
export class FormHeadersComponent implements OnInit {

	@Input() title: string;
	@Input() modal: any;
	@Input() customclass: string;
	@Input() backbutton: any = 'true';
	constructor(private navCtr: NavController, private modalCtrl: ModalController) { }

	ngOnInit() { }

	goBack() {
		if (this.modal == 'true') {
			this.modalCtrl.dismiss();
		} else {
			this.navCtr.pop();
		}
	}
}
