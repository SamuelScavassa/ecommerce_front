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
  constructor(private carrinho: CarrinhoService) {}
  ngOnInit()
  {
    this.Carrinho = this.carrinho.getCarrinho();
  }

  
}
