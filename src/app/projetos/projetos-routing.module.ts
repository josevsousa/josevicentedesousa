import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';

const projetosRoutes = [
  {path: 'projetos', component: ProjetosComponent},
  {path: 'buscar-cep', component: BuscarCepComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(projetosRoutes)
  ],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
