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
    this.contatoService.addContato(this.formulario); //enviando o formContato para o service contato
    this.enviado = !this.enviado;
  
  }

  verificaValorTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaErroCss(inp){
    return {
      'has-error': this.verificaValorTouched(inp),
      'has-feedback': this.verificaValorTouched(inp)
    }
  }
}
