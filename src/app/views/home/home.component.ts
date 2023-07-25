import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  Lista = []
  constructor(private servico: LoginService){
  }
  ngOnInit(){
    this.user = this.servico.recuperarUser();
    this.Lista = this.getProdutos();
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
}
