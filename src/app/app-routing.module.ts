import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ResultadoPesquisaComponent } from './views/resultado-pesquisa/resultado-pesquisa.component';
import { CarrinhoPageComponent } from './views/carrinho-page/carrinho-page.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: ResultadoPesquisaComponent },
  { path: 'carrinho', component: CarrinhoPageComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
