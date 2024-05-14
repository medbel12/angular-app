import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productState: any = {
    products: [],
    keyword: "",
    totalPages: 0,
    pageSize: 3,
    currentPage: 1,
    totalProduct: 0,
    status: "",
    errorMessae: ""
  }
  public authState :any={
    isAuthentificated : false,
    username :undefined,
    roles : undefined,
    token : undefined
  }
  constructor() {
  }
  public  setPorductState(state :any){

    this.productState={...this.productState,...state}
  }
  public setAuthState(state :any):void{
    this.authState={...this.authState,...state};
  }
}
