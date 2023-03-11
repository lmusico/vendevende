import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ContaComponent } from './components/conta/conta.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'conta', component: ContaComponent },
      { path: 'faq', component: FaqComponent },
    ]
  },
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
