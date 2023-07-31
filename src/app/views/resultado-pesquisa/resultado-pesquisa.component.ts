import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { LoginService } from 'src/app/services/login.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css']
})
export class ResultadoPesquisaComponent {
  Lista: any
  constructor(private cookieService: CookieService, private carrinho: CarrinhoService,
    private router: Router){
  }
  ngOnInit(){
    let result = JSON.parse(this.cookieService.get('busca'));
    if(result.length > 0) this.Lista = result
    else this.Lista = this.getProdutos()
  }
  add(produto: any){
    this.carrinho.addAoCarrinho(produto);
  }

  ver(id: any){
    this.router.navigateByUrl('/produto/'+id);
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
}
