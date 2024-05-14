import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import { Router } from '@angular/router';
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{


  public products : Array<Product>=[] ;
  public keyword: string ="";
  totalPages:number=0;
  pageSize: number=3;
  currentPage : number = 1;
  constructor(private productService :ProductService ,
              private router : Router , public appStateService: AppStateService){

  }
  ngOnInit(): void {

    this.searchProducts();
  }
  searchProducts(){

    this.productService.searchProducts(
      this.appStateService.productState.keyword,
      this.appStateService.productState.currentPage,
      this.appStateService.productState.pageSize)
      .subscribe({
        next  : (resp) => {



          let products = resp.body as Product[];
          let totalProducts:number = parseInt(resp.headers.get('x-total-count')!);

          let totalPages =
            this.appStateService.productState.totalPages = Math.floor( totalProducts/ this.appStateService.productState.pageSize);
          console.log(this.totalPages);
          if(totalProducts % this.appStateService.productState.pageSize !=0){
            ++totalPages;
          }
          this.appStateService.setPorductState({
              products : products,
              totalProducts : totalProducts,
              totalPages : totalPages,
              // donc une fois les donneés sont charggés
              status : "LOADED"


            }

          )
        },
        error : err => {
          console.log(err)
          this.appStateService.setPorductState({
            status : "ERROR",
            errorMessae : err


          })
        }
      })
  }

  handleCheckProduct(p: Product) {
    //
    this.productService.checkProduct(p).subscribe({
      next : updatedProduct => {
        p.checked =! p.checked;
        //this.getProduct()
      }

    })

  }


  handleDelete(product: Product) {
    if(confirm("Sure u wanna delete"))
      this.productService.deleteProduct(product).subscribe({
        next:value => {

          this.searchProducts();
        }

      })
  }


  handleGotoPage(page: number) {
    this.appStateService.productState.currentPage = page;
    this.searchProducts();
  }

  handleEdit(p: Product) {
    this.router.navigateByUrl(`/admin/editProduct/${p.id}`)
  }

}
