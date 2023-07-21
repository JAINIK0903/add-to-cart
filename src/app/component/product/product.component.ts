import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public productList: any;
  constructor(private apiService: ApiService, private cartService: CartService) { }
  ngOnInit() {
    this.apiService.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
