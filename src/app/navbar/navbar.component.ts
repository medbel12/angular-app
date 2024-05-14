import {Component, signal} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions : Array<any> = [

    {title : "Home", "route":"/admin/home",icon : "house" },
    {title : "product", "route":"/admin/product",icon : "search" },
    {title : "newProduct", "route":"/admin/newProduct",icon : "safe" }
  ];
  currentAction : any;
  public isLoading : boolean=false;

  constructor(public appStateService : AppStateService ,
              public loadingService :LoadingService,
              private router : Router) {
    // this.loadingService.isLoading$.subscribe({
    //   next : (value)=>{
    //     this.isLoading= value
    //   }
    // })
  }
  setCurrentACtion(a: any) {
    this.currentAction = a;
  }
  logout(){
    this.appStateService.authState = {};
    this.router.navigateByUrl("/login")
  }
  login(){
    this.router.navigateByUrl("/login")

  }
}
