import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'auth',
    canActivate: [LoginGuard],
    loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'techs',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/techs/techs-routing.module').then(m => m.TechsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
