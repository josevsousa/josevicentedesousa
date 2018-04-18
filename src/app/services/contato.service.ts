import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ContatoService {
 
  constructor(private http: Http) { }

  addContato(form){
    // console.log(form.value);
    var resp: boolean = false;

    this.http.post(
        'https://httpbin.org/post', 
        JSON.stringify(form.value)
      )
      .map(res => res.json())
      .subscribe(dados => {
        console.log(dados);

      })
    
  }
}
