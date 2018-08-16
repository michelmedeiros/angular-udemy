import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListRoutingModule } from './cadastro-contatos/lista/list-routing.module';
import { ListModule } from './cadastro-contatos/lista/list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ListRoutingModule, ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
