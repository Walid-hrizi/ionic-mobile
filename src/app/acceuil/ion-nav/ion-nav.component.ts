import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-ion-nav',
  templateUrl: './ion-nav.component.html',
  styleUrls: ['./ion-nav.component.scss'],
})
export class IonNavComponent {

  constructor(private menu: MenuController,private authService:AuthentificationService) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  signOut(){

    this.authService.SignOut();
  }
}