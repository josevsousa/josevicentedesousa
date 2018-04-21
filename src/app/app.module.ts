// import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from "./services/auth.service";


import { environment } from '../environments/environment';
// import { AngularFireModule } from "angularfire2";
// import { AngularFireAuthModule } from "angularfire2/auth";

// bootstrap
import { ModalModule } from "ngx-bootstrap/modal";
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { AppRoutingModule } from './app-routing.module';
import { ContatoService } from './services/contato.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjetosModule } from './projetos/projetos.module';
import { SharedModule } from "./shared/shared.module";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    CursosComponent,
    ContatoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjetosModule,
    HttpModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ContatoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
