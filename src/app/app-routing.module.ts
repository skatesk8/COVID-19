import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'estudios',
    loadChildren: () => import('./pages/estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
