import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { ListarSalaComponent } from './listar/listar-sala.component';
import { SalaService } from './services/sala.service';
import { SalaAppComponent } from './sala-app.component';


@NgModule({
  declarations: [
    ListarSalaComponent,
    SalaAppComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule
  ],
  providers: [SalaService]
})
export class SalaModule { }
