import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
	selector: 'app-tournament-create',
	templateUrl: './tournament-create.page.html',
	styleUrls: ['./tournament-create.page.scss'],
})
export class TournamentCreatePage implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	selectBal(ballType, event) {
		$('.ball').removeClass('active');
		$(event.target).parent('.ball').addClass('active')
	}

}
