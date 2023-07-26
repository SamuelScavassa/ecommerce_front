import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  Lista: any;
  constructor(private servico: LoginService, private carrinho: CarrinhoService){
  }
  ngOnInit(){
    this.user = this.servico.recuperarUser();
    try {
      this.Lista = this.get10ElementosAleatorios(this.getProdutos());
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

  get10ElementosAleatorios(lista: any[]) {
    if (lista.length <= 20) {
      return lista;
    }

    const elementosAleatorios = [];
    const copiaLista = lista.slice();

    for (let i = 0; i < 10; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
      const elementoAleatorio = copiaLista.splice(indiceAleatorio, 1)[0];
      elementosAleatorios.push(elementoAleatorio);
    }

    return elementosAleatorios;
  }

  add(produto: any){
    this.carrinho.addAoCarrinho(produto);
  }
}
