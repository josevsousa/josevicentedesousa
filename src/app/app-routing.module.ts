import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { BuscarCepComponent } from './projetos/buscar-cep/buscar-cep.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'curso', component: CursosComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'buscar-cep', component: BuscarCepComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'profile', component: UserProfileComponent },
  {path: '', redirectTo:'inicio', pathMatch: 'full'},  
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
