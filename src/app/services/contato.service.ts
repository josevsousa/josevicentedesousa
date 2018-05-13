import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContatoService {
 
  contatos: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore,
    private http: Http
    ) {
      this.setContatos();
     }

  private setContatos(): void{
    this.contatos = this.db.collection<any>('/contatos');
  }  

  addContato(form): Promise<void>{
    // console.log(form.value);
    const uid = this.db.createId();
    return this.contatos.doc<any>(uid)
      .set({
        uid,
        email:form.value.email,
        nome: form.value.nome,
        message: form.value.messagem
      })

    // envio 1
    // this.http.post(
    //     'https://httpbin.org/post', 
    //     JSON.stringify(form.value)
    //   )
    //   .map(res => res.json())
    //   .subscribe(dados => {
    //     console.log(dados);

    //   })
    // fim do envio
  }
}
