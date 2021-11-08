import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupListPageRoutingModule } from './pickup-list-routing.module';

import { PickupListPage } from './pickup-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupListPageRoutingModule
  ],
  declarations: [PickupListPage]
})
export class PickupListPageModule {}
