import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

import { LoginService } from 'src/app/services/login.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})

export class CabecalhoComponent {
  busca: string = '';
  nome: string = '';
  botao: string = 'Login'
  numCarrinho: string = ''
  constructor(private servico: LoginService, private buscar: PesquisaService, private carrinho: CarrinhoService, private cookieService: CookieService){

  }
  load(){
    setInterval(() => {
      this.numCarrinho = this.carrinho.getCarrinho().length;
    }, 100);

  }


  ngOnInit(){
    this.load()
    try {
      var nome = this.servico.recuperarUser();
      this.nome = 'Bem vindo, ' + nome['nome']
      this.botao = 'Usuário'
    }
    catch (e) {

    }
  }

  navLogin() {
    if(this.botao == 'Login'){
      window.location.href = ("/login");
    } else {

    }

  }

  navCarrinho(){
    window.location.href = "/carrinho";
  }
  navIndex() {
    window.location.href = " ";
  }

  async pesquisa(){
    await this.buscar.buscar(this.busca);

  }
}


