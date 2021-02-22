import { SelectGroundComponent } from './../select-ground/select-ground.component';
import { CityComponent } from './../city/city.component';
import { FormHeadersComponent } from './../form-headers/form-headers.component';
import { TabsMenuComponent } from './../tabs-menu/tabs-menu.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    TabsMenuComponent,
    FormHeadersComponent,
    CityComponent,
    SelectGroundComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    TabsMenuComponent,
    FormHeadersComponent,
    CityComponent,
    SelectGroundComponent
  ]
})
export class SharedModule { }
