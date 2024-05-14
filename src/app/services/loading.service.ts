import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // subject  = observable
  public isLoading$=new Subject<boolean>()
  constructor() { }
  showLoadingSpinner(){
    this.isLoading$.next(true)
  }
  hideLoadingSpinner(){
    this.isLoading$.next(false)

  }
}
