import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import {Injectable} from "@angular/core";
import {AppStateService} from "../services/app-state.service";
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard{
  constructor(private appState : AppStateService, private router : Router,
              private route : ActivatedRoute) {

  }
  canActivate( route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot) {
    if(this.appState.authState.roles.includes(route.data['requiredRoles'])){
      return true;
    }else {
      this.router.navigateByUrl("/admin/notAuthorized");
      return false;
    }
  }


}
