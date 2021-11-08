import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupListPage } from './pickup-list.page';

const routes: Routes = [
  {
    path: '',
    component: PickupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupListPageRoutingModule {}
