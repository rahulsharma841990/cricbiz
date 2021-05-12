import { DataService } from './../../services/data.service';
import { CreateMatchOfficialComponent } from './../create-match-official/create-match-official.component';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-match-official',
	templateUrl: './match-official.page.html',
	styleUrls: ['./match-official.page.scss'],
})
export class MatchOfficialPage implements OnInit {

	private subscriptions: any = [];
	private umpires: any = [];
	private scorers: any = [];
	private commentater: any = '';
	private match_refree: any = '';
	private live: any = '';
	constructor(
		private modalControler: ModalController,
		private dataService: DataService,
		private navCtrl: NavController
	) { }

	ngOnInit() {
		this.subscriptions['officials'] = this.dataService.observeMe().subscribe((res) => {
			if (res.type == 'officials') {
				this.setOfficials();
			}
		});
		this.setOfficials();
	}

	ionViewDidLeave() {
		this.subscriptions['officials'].unsubscribe();
	}

	setOfficials() {
		let umpires = localStorage.getItem('umpire');
		if (umpires != undefined && umpires != null) {
			this.umpires = JSON.parse(umpires);
		}
		let scorers = localStorage.getItem('scorer');
		if (scorers != undefined && scorers != null) {
			this.scorers = JSON.parse(scorers);
		}
		let commentater: any = localStorage.getItem('commentater');
		if (commentater != undefined && commentater != null) {
			this.commentater = JSON.parse(commentater).name;
		}
		let match_refree: any = localStorage.getItem('match_refree');
		if (match_refree != undefined && match_refree != null) {
			this.match_refree = JSON.parse(match_refree).name;
		}
		let live: any = localStorage.getItem('live');
		if (live != undefined && live != null) {
			this.live = JSON.parse(live).name;
		}
	}

	async searchUser(title, type) {
		let modal = await this.modalControler.create({
			component: CreateMatchOfficialComponent,
			componentProps: {
				title: title,
				type: type
			}
		});
		return await modal.present();
	}

	done() {
		this.navCtrl.pop();
	}

}
