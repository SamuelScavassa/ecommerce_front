import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  Lista: any;
  constructor(private servico: LoginService, private carrinho: CarrinhoService, private router: Router){
  }
  ngOnInit(){

    try {
      this.Lista = this.getProdutos();
    }
    catch (e) {

    }
  }
  getProdutos() {
    let url = "http://127.0.0.1:3000/produtos"
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    if (xhttp.status == 200) {
        return JSON.parse(xhttp.responseText)
    }
    else {
        document.body.innerHTML = '<h1> Sem produtos ainda </h1>'
    }

  }
  Number(va: string)
  {
    return parseFloat(va);
  }
  add(produto: any){
    this.carrinho.addAoCarrinho(produto);
  }
  ver(id: any){
    this.router.navigateByUrl('/produto/'+id);
  }
}


