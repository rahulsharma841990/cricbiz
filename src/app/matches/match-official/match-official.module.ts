import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchOfficialPageRoutingModule } from './match-official-routing.module';

import { MatchOfficialPage } from './match-official.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SharedModule,
		MatchOfficialPageRoutingModule
	],
	declarations: [MatchOfficialPage]
})
export class MatchOfficialPageModule { }
