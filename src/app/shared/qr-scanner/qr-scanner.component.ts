import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
	selector: 'app-qr-scanner',
	templateUrl: './qr-scanner.component.html',
	styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit {

	scanSub: any;
	isFlashOn: any = false;
	switchCamera: any = true;
	constructor(private qrScanner: QRScanner, public modalController: ModalController) {
		this.scanQr();
	}

	ngOnInit() { }

	scanQr() {
		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					this.qrScanner.show();
					this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
						console.log('Scanned something', text);
						alert(text);
						this.qrScanner.hide(); // hide camera preview
						this.scanSub.unsubscribe(); // stop scanning
						this.qrScanner.destroy(); // stop scanning
						this.modalController.dismiss();
					});

				} else if (status.denied) {
				} else {
				}
			})
			.catch((e: any) => console.log('Error is', e));
	}

	ionViewDidLeave() {
		this.scanSub.unsubscribe();
		this.qrScanner.hide();
		this.qrScanner.destroy();
	}

	toggleFlash() {
		if (this.isFlashOn == true) {
			this.qrScanner.disableLight();
			this.isFlashOn = false;
		} else {
			this.qrScanner.enableLight();
			this.isFlashOn = true;
		}
	}

	toggleCamera() {
		if (this.switchCamera == true) {
			this.qrScanner.useFrontCamera();
			this.switchCamera = false;
		} else {
			this.qrScanner.useBackCamera();
			this.switchCamera = true;
		}
	}

	goBack() {
		this.modalController.dismiss();
		this.scanSub.unsubscribe();
		this.qrScanner.hide();
		this.qrScanner.destroy();
	}

}
