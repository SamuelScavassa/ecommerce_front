import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  ResultadoBusca: any;
  constructor(private cookieService: CookieService) { }
  buscar(busca: string) {
    const data = {
      busca: busca
    };
    const url = "http://127.0.0.1:3000/pesquisa";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.cookieService.set('busca', JSON.stringify(data));
        
        window.location.href = "/pesquisa"; // Redirecionamento movido para dentro do bloco then
      })
      .catch(error => {
        // Tratar erros da requisição aqui, se necessário
        console.error('Erro na requisição:', error);
      });
  }

}
