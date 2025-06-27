import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'informacion-personal',
    loadChildren: () => import('./informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule)
  },
  {
    path: 'mi-contacto',
    loadChildren: () => import('./mi-contacto/mi-contacto.module').then( m => m.MiContactoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
