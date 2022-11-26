import { ListarFilmeViewModel } from "src/app/filmes/view-models/listar-filme.view-model"
import { ListarSalaViewModel } from "src/app/salas/view-models/listar-sala.view-model"


export class VisualizarSessaoViewModel  {
  id:	string;
  data:	string;
  horaInicio:	string;
  horaTermino: string;
  tipoSessao:	string;
  tipoAudio:	string;
  valorIngresso:	number;
  filme:	ListarFilmeViewModel;
  sala:	ListarSalaViewModel;

}
