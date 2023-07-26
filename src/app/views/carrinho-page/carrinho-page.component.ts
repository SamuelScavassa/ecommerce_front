import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.css']
})
export class CarrinhoPageComponent {
  Carrinho = new Array
  total: number = 0;
  constructor(private carrinho: CarrinhoService) {}

  ngOnInit()
  {
    try {
      this.Carrinho = this.carrinho.getCarrinho();
      this.getValor()
    }
    catch (e) {

    }
  }

  async deletar(item: any){
    await this.carrinho.removeItem(item);
    window.location.href = "/carrinho";
  }

  getValor() {
     setInterval(() => {
      this.total = this.carrinho.total();
     }, 100)
  }

}
