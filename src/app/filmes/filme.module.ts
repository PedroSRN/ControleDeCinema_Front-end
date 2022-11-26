import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeRoutingModule } from './filme-routing.module';
import { ListarFilmeComponent } from './listar/listar-filme.component';
import { FilmeAppComponent } from './filme-app.component';
import { FilmeService } from './services/filme.service';
import { InserirFilmeComponent } from './inserir/inserir-filme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarFilmeComponent } from './editar/editar-filme.component';
import { FormsFilmeResolver } from './services/forms-filme.resolver';
import { ExcluirFilmeComponent } from './excuir/excluir-filme.component';
import { VisualizarFilmeResolver } from './services/visualizar-filme.resolver';



@NgModule({
  declarations: [
    ListarFilmeComponent,
    FilmeAppComponent,
    InserirFilmeComponent,
    EditarFilmeComponent,
    ExcluirFilmeComponent
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [FilmeService, FormsFilmeResolver, VisualizarFilmeResolver]
})
export class FilmeModule { }
