import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   component: HomePage,
  // },
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoPageModule),
      },
      {
        path: 'person-list',
        loadChildren: () =>
          import('./person-list/person-list.module').then(
            (m) => m.PersonListPageModule
          ),
      },
      {
        path: 'all-list',
        loadChildren: () =>
          import('./all-list/all-list.module').then((m) => m.AllListPageModule),
      },
      {
        path: 'pickup-list',
        loadChildren: () =>
          import('./pickup-list/pickup-list.module').then(
            (m) => m.PickupListPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home/tabs/person-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/person-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
