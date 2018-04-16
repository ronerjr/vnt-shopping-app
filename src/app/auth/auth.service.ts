import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate {
  private isAuthenticated = new Subject<boolean>();
  private currentUser: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.isAuthenticated.next(true);
        this.router.navigate(['/']);
      } else {
        this.isAuthenticated.next(false);
        this.router.navigate(['/login']);
      }
    });
    return this.isAuthenticated;
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  loginTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.currentUser;
  }

}
