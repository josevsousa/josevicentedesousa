import { Component, OnInit } from '@angular/core';

// import { Form, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {

  // formulario: FormGroup; //var que representa o formulario
  btConsultar: boolean = true;
  alertErroCep: boolean = false;
  cep: any; //cep input

  // valores do retorno google maps
  address = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    unidade: "",
    ibge: "",
    gia: ""
  }
  address_status: boolean = false;

  constructor( private http: Http ) { }

  ngOnInit() {
    this.cep = document.getElementById('cep');
  }

  // CEP
  keyUpInputCep(){
    var cep = this.cep.value;
    this.alertErroCep = false;
    if(cep != ""){
      this.validaCep(cep);
    }else{
      this.cep.style.color = "#000"
    }
  }
  validaCep(cep){
    var validacep = /^[0-9]{8}$/; //formato de cep valido
    if(validacep.test(cep)) {
      this.cep.style.color = "#000";
      this.btConsultar = false;
    }else{
        this.cep.style.color = "red";
        this.address_status = false;
        this.btConsultar = true;
    }
  }

  // SUBMIT
  ngSubmit(){
    if(this.cep.value != ""){
      //chamar funcao de buscar o cep
      this.buscarCepRest(this.cep.value);
    }
  }
  buscarCepRest(cep){
    //Verifica se campo cep possui valor informado.
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      // .map(dados => dados.json())
      .subscribe(dados => {
        console.log(dados.json());
        if(!dados.json().erro){
          this.address = dados.json(); //add o end no address
          this.address_status = true; // mostra o address na view
          this.cep.value = ""; // limpa campo cep
          this.btConsultar = true;
        }else{
          this.alertErroCep = true;
      }

    }); 
  }

  limparForm(){
    this.cep.value = "";
    this.alertErroCep = false;
    this.cep.focus();
    this.btConsultar = true;
  }
}
