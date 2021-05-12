import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ground-map',
	templateUrl: './ground-map.page.html',
	styleUrls: ['./ground-map.page.scss'],
})
export class GroundMapPage implements OnInit {

	constructor(public navCtrl: NavController) { }

	ngOnInit() {
	}

	done() {
		this.navCtrl.pop();
	}
}
