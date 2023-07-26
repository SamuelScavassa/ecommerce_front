import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ResultadoPesquisaComponent } from './views/resultado-pesquisa/resultado-pesquisa.component';
import { CarrinhoPageComponent } from './views/carrinho-page/carrinho-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: ResultadoPesquisaComponent },
  { path: 'carrinho', component: CarrinhoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
