import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tournaments',
	templateUrl: './tournaments.page.html',
	styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

	slideOpts = {
		initialSlide: 1,
		speed: 400
	};
	constructor() { }

	ngOnInit() {
		// setTimeout(() => {
		// 	document.getElementById("first-segment").scrollIntoView({
		// 		behavior: 'smooth',
		// 		block: 'center',
		// 		inline: 'center'
		// 	});
		// }, 6000);
	}

	changeScreen(event) {
		let clickedSegment = event.detail.value;
		document.getElementById(clickedSegment).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}

}
