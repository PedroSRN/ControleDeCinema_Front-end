import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalaService } from '../services/sala.service';
import { ListarSalaViewModel } from '../view-models/listar-sala.view-model';

@Component({
  selector: 'app-listar-sala',
  templateUrl: './listar-sala.component.html',
  styles: [
  ]
})
export class ListarSalaComponent implements OnInit {
  public salas$ : Observable<ListarSalaViewModel[]>

  constructor(private salaServices: SalaService) { }

  ngOnInit(): void {
    this.salas$ = this.salaServices.selecionarTodos();
  }

}
