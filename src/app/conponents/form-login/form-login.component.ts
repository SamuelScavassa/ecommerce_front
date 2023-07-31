import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  constructor(private servico: LoginService){
  }


  logar() {
    this.servico.login(this.email, this.senha);

  }

}
