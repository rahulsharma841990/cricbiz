import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private baseUrl = 'https://cricbiz.webcolorz.in/api/';
	// private baseUrl = 'http://192.168.1.109:8000/api/';
	// private baseUrl = 'http://192.168.1.10:8000/api/';
	// private baseUrl = 'http://192.168.1.112:8000/api/';
	// private baseUrl = 'http://localhost:8000/api/';
	constructor(private http: HttpClient,) { }

	request(endPoint, method = 'get', params = null) {
		return new Promise((resolve, reject) => {
			if (method == 'post') {
				this.http.post(this.baseUrl + endPoint, JSON.stringify(params)).subscribe((result) => {
					resolve(result);
				}, err => {
					reject(err);
				});
			} else {
				this.http.get(this.baseUrl + endPoint).subscribe((result) => {
					resolve(result);
				}, err => {
					reject(err);
				});
			}
		});
	}
}
