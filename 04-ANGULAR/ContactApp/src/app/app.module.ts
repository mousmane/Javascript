import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactApiService} from './services/contact-api.service';
import { MonCtestComponent } from './mon-ctest/mon-ctest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AjouterComponent,
    MonCtestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
