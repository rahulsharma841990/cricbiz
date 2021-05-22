import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-out-type',
	templateUrl: './out-type.component.html',
	styleUrls: ['./out-type.component.scss'],
})
export class OutTypeComponent implements OnInit {

	@Input() title;
	constructor() { }

	ngOnInit() { }

}
