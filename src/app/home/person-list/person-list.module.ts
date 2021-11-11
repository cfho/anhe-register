import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonListPageRoutingModule } from './person-list-routing.module';

import { PersonListPage } from './person-list.page';
import { DumbListComponent } from 'src/app/dumb-list/dumb-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonListPageRoutingModule
  ],
  declarations: [PersonListPage, DumbListComponent]
})
export class PersonListPageModule {}
