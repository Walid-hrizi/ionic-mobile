import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSignupPageRoutingModule } from './home-signup-routing.module';

import { HomeSignupPage } from './home-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomeSignupPageRoutingModule
  ],
  declarations: [HomeSignupPage]
})
export class HomeSignupPageModule {}
