import { Injectable } from '@angular/core';
import { Convert } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookieService: CookieService) {
  }
  login(email :string, senha: string) {

      const data = {
        email: email,
        senha: senha
      };
      const url = "http://127.0.0.1:3000/login";
      const requestOptions = {
        method: "POST", // Método HTTP: POST
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setCookieObject("user", JSON.stringify(data), 30);
          window.location.href = " ";
        })
        .catch(error => {
          console.error("Erro ao enviar a solicitação:", error);
        });
    }
  setCookieObject(nome: string, objeto: string, expiracaoDias: number) {
    this.cookieService.set(nome, objeto, expiracaoDias);
  }

  recuperarUser() {
    const jsonString = this.cookieService.get('user');
    if (jsonString) {
      const meuJSON = JSON.parse(jsonString);
      return meuJSON;

    } else {
      console.log('JSON não encontrado no cookie.');
    }
  }
}
