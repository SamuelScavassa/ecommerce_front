import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent {
  produtoId: any
  produto: any
  constructor(private route: ActivatedRoute, private carrinho: CarrinhoService) {

  }
    ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.produtoId = params.get('id');
      })
      this.produto = this.getProdutos(parseInt(this.produtoId))
    }
    getProdutos(id: number) {
      let url = "http://127.0.0.1:3000/produtos/" + id
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, false);
      xhttp.send();
      return JSON.parse(xhttp.responseText)
    }
    add(item: any){
      this.carrinho.addAoCarrinho(item);
    }
}
