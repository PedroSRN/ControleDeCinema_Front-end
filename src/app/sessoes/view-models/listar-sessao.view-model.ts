import { TipoAudio } from "./tipoAudioEnum";
import { TipoSessao } from "./tipoSessaoEnum";

export class ListarSessaoViewModel {
  id:	string;
  data:	string;
  horaInicio:	string;
  horaTermino:	string;
  tipoSessao:	string;
  tipoAudio: string;
  valorIngresso:	number;
  nomeFilme:	string;
  nomeSala:	string;
}
