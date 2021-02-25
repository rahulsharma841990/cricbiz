import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFriendsPageRoutingModule } from './add-friends-routing.module';

import { AddFriendsPage } from './add-friends.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddFriendsPageRoutingModule,
  ],
  declarations: [AddFriendsPage],
})
export class AddFriendsPageModule {}
