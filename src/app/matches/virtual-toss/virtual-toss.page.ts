import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
	selector: 'app-virtual-toss',
	templateUrl: './virtual-toss.page.html',
	styleUrls: ['./virtual-toss.page.scss'],
})
export class VirtualTossPage implements OnInit {

	result: any = '';
	showResult: any = false;
	constructor(private nativeAudio: NativeAudio, private navCtrl: NavController) {
		// this.nativeAudio.preloadSimple('flip-sound', '../../../assets/images/coinflip.mp3').then(() => {

		// });
	}

	ngOnInit() {
		let elem = this;
		$('#coin').on('click', function () {
			elem.showResult = false;
			// elem.nativeAudio.play('flip-sound');
			var flipResult = Math.random();
			$('#coin').removeClass();
			setTimeout(function () {
				if (flipResult <= 0.5) {
					$('#coin').addClass('heads');
					setTimeout(() => {
						elem.result = "It's Head";
						elem.showResult = true;
					}, 3000);
					// elem.nativeAudio.stop('flip-sound');
				}
				else {
					$('#coin').addClass('tails');
					setTimeout(() => {
						elem.result = "It's Tails";
						elem.showResult = true;
					}, 3000);
					// elem.nativeAudio.stop('flip-sound');
				}
			}, 100);
		});
	}

	closeToss() {
		this.navCtrl.pop();
	}
}
