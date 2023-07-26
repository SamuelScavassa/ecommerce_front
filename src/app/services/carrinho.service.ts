import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  Carrinho = new Array
  constructor(private cookieService: CookieService) { }

  addAoCarrinho(produto: any){
    this.Carrinho = JSON.parse(this.cookieService.get('carrinho'));
    this.Carrinho.push(produto)
    this.cookieService.set('carrinho', JSON.stringify(this.Carrinho))
  }

  getCarrinho() {
    return JSON.parse(this.cookieService.get('carrinho'));
  }

}
