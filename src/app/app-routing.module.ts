import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes ,CanActivate} from '@angular/router';
import { IonNavComponent } from './acceuil/ion-nav/ion-nav.component';
import { 
  AuthGuardService as AuthGuard 
} from './shared/auth/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home-signup',
    loadChildren: () => import('./home-signup/home-signup.module').then( m => m.HomeSignupPageModule)
  },

  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule),
    canActivate: [AuthGuard]

    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
