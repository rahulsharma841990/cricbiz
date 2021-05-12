import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { IonicCustomAlertModule } from 'ionic-custom-alert';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [

		BrowserAnimationsModule,
		IonicCustomAlertModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true },
		FirebaseAuthentication,
		FirebaseX,
		Camera,
		DatePicker,
		Crop,
		File,
		NativeAudio,
		Contacts,
		QRScanner
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
