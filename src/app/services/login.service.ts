import { Injectable } from '@angular/core';
import { Convert } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  constructor(private cookieService: CookieService, private router: Router) {
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
          if(data != null){
            this.user = Convert.toUser(JSON.stringify(data));
            this.setCookieObject("user", Convert.userToJson(this.user), 30);
            this.router.navigateByUrl('/');
          } else {
            alert("Erro no login");
          }
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

  logout(){
    this.cookieService.delete('user');
  }
}
