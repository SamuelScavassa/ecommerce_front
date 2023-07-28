import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private servico: LoginService, private buscar: PesquisaService,
    private carrinho: CarrinhoService, private cookieService: CookieService,
    private router: Router){

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
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl('/usuario')
    }

  }

  navCarrinho(){
    this.router.navigateByUrl("/carrinho");
  }
  navIndex() {
    this.router.navigateByUrl("/");
  }

  navProduto(){
    this.router.navigateByUrl('/produtos');
  }

  async pesquisa(){
    await this.buscar.buscar(this.busca);

  }
}


