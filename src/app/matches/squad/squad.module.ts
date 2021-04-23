import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquadPageRoutingModule } from './squad-routing.module';

import { SquadPage } from './squad.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SharedModule,
		Ng2SearchPipeModule,
		SquadPageRoutingModule
	],
	declarations: [SquadPage]
})
export class SquadPageModule { }
