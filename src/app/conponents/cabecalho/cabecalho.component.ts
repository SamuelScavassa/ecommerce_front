import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  textoDoBotao: string = 'Login';
  constructor(private servico: LoginService){

  }
  
  navLogin() {
    window.location.href = ("/login");
  }
  navIndex() {
    window.location.href = " ";
  }
}


