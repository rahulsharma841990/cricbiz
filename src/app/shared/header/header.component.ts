import { MenuController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	@Input() showsearch: string = 'false';
	constructor(public menu: MenuController) { }

	ngOnInit() { }

	showMenu() {
		this.menu.open();
	}
}
