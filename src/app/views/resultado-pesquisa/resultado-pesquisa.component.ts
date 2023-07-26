import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css']
})
export class ResultadoPesquisaComponent {
  Lista = [{ nome: 'Sem resultado', preco: 0}];
  constructor(private cookieService: CookieService){
  }
  ngOnInit(){
    let result = JSON.parse(this.cookieService.get('busca'));
    if(result.length > 0) this.Lista = result
  }
}
