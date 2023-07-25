import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CabecalhoComponent } from './conponents/cabecalho/cabecalho.component';
import { FormLoginComponent } from './conponents/form-login/form-login.component';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ProdutoComponent } from './conponents/produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    FormLoginComponent,
    LoginComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
