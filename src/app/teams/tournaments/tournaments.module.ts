import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsPageRoutingModule } from './tournaments-routing.module';

import { TournamentsPage } from './tournaments.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SharedModule,
		TournamentsPageRoutingModule
	],
	declarations: [TournamentsPage]
})
export class TournamentsPageModule { }
