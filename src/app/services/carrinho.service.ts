import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  Carrinho = new Array
  constructor(private cookieService: CookieService) { }

  addAoCarrinho(produto: any){
    try {
      if (this.cookieService.check('carrinho')) {
        this.Carrinho = JSON.parse(this.cookieService.get('carrinho'));
      }
      this.Carrinho.push(produto);
      this.cookieService.set('carrinho', JSON.stringify(this.Carrinho), 30);
    } catch (error) {
      console.error('Error occurred while removing item:', error);

    }
  }

  getCarrinho() {
    return JSON.parse(this.cookieService.get('carrinho'));
  }


  removeItem(itemIndex: number) {
      try {
        if (this.cookieService.check('carrinho')) {
          this.Carrinho = JSON.parse(this.cookieService.get('carrinho'));
        }

        this.Carrinho.splice(itemIndex, 1);
        this.cookieService.set('carrinho', JSON.stringify(this.Carrinho), 30);
      } catch (error) {
        console.error('Error occurred while removing item:', error);

      }
  }

  total(){
    let valor = 0
    try {
      if (this.cookieService.check('carrinho')) {
        this.Carrinho = JSON.parse(this.cookieService.get('carrinho'));
      }
      ;
      this.Carrinho.forEach(item => {
        valor += item.preco
      });


    } catch (error) {
      console.error('Error occurred while removing item:', error);

    }
    finally {
      return valor
    }
  }

}



