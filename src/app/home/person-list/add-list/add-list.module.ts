import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddListPageRoutingModule } from './add-list-routing.module';

import { AddListPage } from './add-list.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddListPageRoutingModule
  ],
  declarations: [AddListPage]
})
export class AddListPageModule {}
