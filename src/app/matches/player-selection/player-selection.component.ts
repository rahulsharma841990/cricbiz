import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-player-selection',
	templateUrl: './player-selection.component.html',
	styleUrls: ['./player-selection.component.scss'],
})
export class PlayerSelectionComponent implements OnInit {

	@Input() type;
	@Input() number;
	listOfPlayers: any = [];
	constructor(private modalController: ModalController) { }

	ngOnInit() {
		let listOfPlayers = JSON.parse(localStorage.getItem('match_id'));
		this.listOfPlayers = listOfPlayers;
	}

	selectPlayer(player) {

		this.modalController.dismiss(player, this.number);
	}

}
