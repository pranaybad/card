import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList:any;


  constructor(private api:ApiService ,
    private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productsList=res;
      this.productsList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
addtoCart(item:any){
  this.cartApi.addToCart(item);
}
}
