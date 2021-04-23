import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	public eventBehave = new BehaviorSubject(null);
	private subject = new Subject<any>();
	constructor() { }

	setEvent(data) {
		this.eventBehave.next(data);
	}
	observeMe(): Observable<any> {
		return this.subject.asObservable();
	}

	fireEvent(type: string) {
		this.subject.next({ type: type });
	}
}
