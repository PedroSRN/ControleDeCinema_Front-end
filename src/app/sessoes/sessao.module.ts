import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessaoRoutingModule } from './sessao-routing.module';
import { SessaoAppComponent } from './sessao-app.component';
import { ListarSessaoComponent } from './listar/listar-sessao.component';
import { InserirSessaoComponent } from './inserir/inserir-sessao.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { SessaoService } from './services/sessao.service';
import { FilmeService } from '../filmes/services/filme.service';
import { SalaService } from '../salas/services/sala.service';
import { EditarSessaoComponent } from './editar/editar-sessao.component';
import { FormsSessaoResolver } from './services/forms-sessao.resolver';
import { ExcluirSessaoComponent } from './excluir/excluir-sessao.component';
import { VisualizarSessaoResolver } from './services/visualizar-sessao.resolver';


@NgModule({
  declarations: [
    SessaoAppComponent,
    ListarSessaoComponent,
    InserirSessaoComponent,
    EditarSessaoComponent,
    ExcluirSessaoComponent
  ],
  imports: [
    CommonModule,
    SessaoRoutingModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgSelectModule,
  ],
  providers: [SessaoService, FilmeService, SalaService, FormsSessaoResolver, VisualizarSessaoResolver]
})
export class SessaoModule { }
