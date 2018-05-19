import { Component, OnInit } from '@angular/core';

import { ContatoService } from './../services/contato.service';
import { Form, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  enviado: boolean = false;

  constructor(
    private contatoService: ContatoService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuild.group({
      email: [null, [Validators.required, Validators.email]],
      nome: [null, Validators.required],
      messagem: [null, Validators.required]
    });
  }

  ngSubmit(){
    // modo contato // se precisar observar uma lista 
    // this.contatoService.addContato(this.formulario)
    //   .then(()=> {
    //     this.enviado = !this.enviado;
    //   })
    //   .catch((erro)=>{
    //     console.log("Erro: " + erro);
    //   }); //enviando o formContato para o service contato
    
    // modo contato2 //se for apenar gravar um registro sem necessidade de observar uma lista
    this.contatoService.addContato2(this.formulario)
      .then(()=> {
        this.enviado = !this.enviado;
      })
      .catch((erro)=>{
        console.log("Erro: " + erro);
    }); //enviando o formContato para o service contato
    
  }

  verificaValorTouchedValid(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  // aplicaErroCss(campo){
  //   return {
  //     'has-error': this.verificaValorTouchedValid(campo),
  //     'has-feedback': this.verificaValorTouchedValid(campo)
  //   }
  // }
}
