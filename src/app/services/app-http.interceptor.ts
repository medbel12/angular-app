import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {finalize, Observable} from 'rxjs';
import {AppStateService} from "./app-state.service";
import {LoadingService} from "./loading.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private appStateService : AppStateService,private loadingService : LoadingService) {


  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    this.loadingService.showLoadingSpinner()

    const authReq = req.clone({
      headers : req.headers.set("Autorization","Bearer JWT ")
    });


    return next.handle(authReq).pipe(
      finalize(()=>{

        this.loadingService.hideLoadingSpinner()
      })
    );
  }
}
