import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})

export class CabecalhoComponent {
  nome: string = '';
  botao: string = 'Login'
  constructor(private servico: LoginService){

  }
  ngOnInit(){
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
  navIndex() {
    window.location.href = " ";
  }
}


