import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonListPage } from './person-list.page';

const routes: Routes = [
  {
    path: '',
    component: PersonListPage
  },
  {
    path: 'edit/:listId',
    loadChildren: () => import('./edit-list/edit-list.module').then( m => m.EditListPageModule)
  },
  {
    path: 'add-list',
    loadChildren: () => import('./add-list/add-list.module').then( m => m.AddListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonListPageRoutingModule {}
