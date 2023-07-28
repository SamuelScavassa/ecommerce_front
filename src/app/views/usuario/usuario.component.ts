import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario: any;
  constructor(private login: LoginService, private router: Router)
  {

  }

  ngOnInit(){
    this.usuario = this.login.recuperarUser();
  }

  async sair(){
    await this.login.logout();
    this.router.navigateByUrl('/')
  }
}
