import { Component } from '@angular/core';
import { AlterarDadosService } from 'src/app/services/alterar-dados.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-alterardados',
  templateUrl: './form-alterardados.component.html',
  styleUrls: ['./form-alterardados.component.css']
})
export class FormAlterardadosComponent {
  email: string = '';
  senha: string = '';
  nome: string = '';
  user: any;
  constructor(private alterar: AlterarDadosService, private login: LoginService) {

  }

  ngOnInit(){
    this.user = this.login.recuperarUser();
  }
  alterarDados() {
    this.alterar.alterar(this.nome, this.email, this.senha);
  }
}
