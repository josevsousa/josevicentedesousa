import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { Contato } from '../models/formContato';


@Injectable()
export class ContatoService {
 
  contatos: AngularFirestoreCollection<Contato>;

  constructor(
    private db: AngularFirestore,
    private http: Http
    ) {
      this.setContatos();
     }

  private setContatos(): void{
    this.contatos = this.db.collection<Contato>('/contatos');
  }  

  // forma de regencinar uma coleção e ficar obeservando obção usada para uma lista 
  addContato(form): Promise<void>{
    // console.log(form.value);
    const uid = this.db.createId();
    
    return this.contatos.doc<Contato>(uid)
      .set({
        uid,
        email:form.value.email,
        nome: form.value.nome,
        message: form.value.messagem
      })
  }

  // forma mais inchuta apenas para inserir dados sem a necessidade de observar 
  addContato2(form) {
    // new id
    const uid = this.db.createId();

    // registro no firestore
    const contatoRef: AngularFirestoreDocument<Contato> = this.db.doc(`contatos/${uid}`);

    //contato
    const contato_data = {
      uid,
      email:form.value.email,
      nome: form.value.nome,
      message: form.value.messagem
    }

    return contatoRef.set(contato_data);

  }
}
