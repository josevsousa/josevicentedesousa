import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { ProjetosComponent } from './projetos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProjetosRoutingModule } from './projetos-routing.module';

import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ProjetosRoutingModule
  ],
  declarations: [
    ProjetosComponent,
    BuscarCepComponent
  ]

})
export class ProjetosModule { }
  