import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { ResultadoPesquisaComponent } from './views/resultado-pesquisa/resultado-pesquisa.component';
import { CarrinhoPageComponent } from './views/carrinho-page/carrinho-page.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { DetalhesProdutosComponent } from './views/detalhes-produtos/detalhes-produtos.component';
import { AlterardadosComponent } from './views/alterardados/alterardados.component';
import { FormAlterardadosComponent } from './conponents/form-alterardados/form-alterardados.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    FormLoginComponent,
    LoginComponent,
    ProdutoComponent,
    ResultadoPesquisaComponent,
    CarrinhoPageComponent,
    UsuarioComponent,
    ProdutosComponent,
    DetalhesProdutosComponent,
    AlterardadosComponent,
    FormAlterardadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
