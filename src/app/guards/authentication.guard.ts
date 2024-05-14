import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {AppStateService} from "../services/app-state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  constructor(private appState:AppStateService, private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.appState.authState.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
