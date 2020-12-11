import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RocketComponent } from './features/rockets/rockets/rocket.component';

// import { RocketComponent } from './features/feature-list/feature-list/rocket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./features/rockets/rockets/rockets.module').then(
        (m) => m.RocketsModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule
      )
  },
  // {
  //   path: 'itemRocket/:rocket_id',
  //   component: RocketComponent,
  // },
  {
    path: 'launches',
    loadChildren: () =>
      import('./features/launches/launches/launches.module').then(
        (m) => m.LaunchesModule
      )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
