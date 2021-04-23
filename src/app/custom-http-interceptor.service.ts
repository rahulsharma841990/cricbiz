import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CustomHttpInterceptorService {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let sendHeader = window.sessionStorage.getItem('headers');
		let userAccessToken = window.sessionStorage.getItem('accessToken');
		if (sendHeader == undefined || sendHeader == 'true') {
			request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
			request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
			request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + userAccessToken) });
			return next.handle(request);
		} else {
			window.sessionStorage.removeItem('headers')
			return next.handle(request);
		}
	}
}
