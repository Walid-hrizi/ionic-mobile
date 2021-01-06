import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate() {
    let N= "null";
    if (localStorage.getItem('user')===N || !localStorage.getItem('user')) {
         this.router.navigate(['home']);
    }
    return true;
  }
}