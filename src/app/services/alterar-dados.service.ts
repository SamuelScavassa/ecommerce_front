import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlterarDadosService {

  constructor(private login: LoginService, private http: HttpClient) { }
  
  async alterar(nome: string, email: string, senha: string) {
    let user = this.login.recuperarUser();
    let content = {
      'nome': nome,
      'email': email,
    };

    let senhaValidada = await this.validarSenha(senha, user.id);

    if (senhaValidada) {
      try {
        this.http.put('http://127.0.0.1:3000/usuarios/' + user.id, content)
          .subscribe(
            () => {
              alert("Atualizado, realize o login novamente.");
            },
            (error) => {
              alert('Erro: ' + error);
            }
          );
      } catch (e) {
        alert('Erro: ' + e);
      }
    }
    else {
      alert('Senha incorreta');
    }
  }

  async validarSenha(senha: string, id: number) {
    try {
      const result = await this.http.get<any>('http://127.0.0.1:3000/usuarios/' + id).toPromise();
      return result.senha === senha;
    } catch (error) {
      alert('Erro ao validar a senha:' + error);
      return false;
    }
  }

}
