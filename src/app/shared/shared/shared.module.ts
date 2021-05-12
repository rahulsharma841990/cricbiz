import { OutHowComponent } from './../../matches/out-how/out-how.component';
import { PlayerSelectionComponent } from './../../matches/player-selection/player-selection.component';
import { CreateMatchOfficialComponent } from './../../matches/create-match-official/create-match-official.component';
import { CreateTeamComponent } from './../create-team/create-team.component';
import { FormsModule } from '@angular/forms';
import { ConfirmRequestedUserComponent } from './../confirm-requested-user/confirm-requested-user.component';
import { SelectGroundComponent } from './../select-ground/select-ground.component';
import { CityComponent } from './../city/city.component';
import { FormHeadersComponent } from './../form-headers/form-headers.component';
import { TabsMenuComponent } from './../tabs-menu/tabs-menu.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '../search/search.component';
import { QrScannerComponent } from '../qr-scanner/qr-scanner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TabsMenuComponent,
    FormHeadersComponent,
    CityComponent,
    SelectGroundComponent,
    SearchComponent,
    QrScannerComponent,
    ConfirmRequestedUserComponent,
    CreateMatchOfficialComponent,
    CreateTeamComponent,
    PlayerSelectionComponent,
    OutHowComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    TabsMenuComponent,
    FormHeadersComponent,
    CityComponent,
    SelectGroundComponent,
    SearchComponent,
    QrScannerComponent,
    ConfirmRequestedUserComponent,
    CreateTeamComponent,
    PlayerSelectionComponent,
    OutHowComponent
  ]
})
export class SharedModule { }
