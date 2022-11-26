import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmeService } from '../services/filme.service';
import { ListarFilmeViewModel } from '../view-models/listar-filme.view-model';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styles: [
  ]
})
export class ListarFilmeComponent implements OnInit {
  public filmes$: Observable<ListarFilmeViewModel[]>

  constructor(private filmeServices: FilmeService) { }

  ngOnInit(): void {
    this.filmes$ = this.filmeServices.selecionarTodos();
  }

}
