import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  constructor(public appState:AppStateService) {
  }
  totalCheckedProducts(){
    let checkedProducts =  this.appState.productState.products.filter((p:any)=>p.checked==true)
    return checkedProducts.length
  }
}
