import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListaComponent } from './lista.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [ListaComponent],
  exports: [
    ListaComponent
  ]
})
export class ListModule { }
