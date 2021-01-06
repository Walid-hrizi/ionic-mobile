import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSignupPage } from './home-signup.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSignupPageRoutingModule {}
