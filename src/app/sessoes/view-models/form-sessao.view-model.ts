import { TipoAudio } from "./tipoAudioEnum";
import { TipoSessao } from "./tipoSessaoEnum";

export class FormsSessaoViewModel {
  id:	string;
  data:	string;
  horaInicio:	string;
  horaTermino:	string;
  tipoSessao:	TipoSessao;
  tipoAudio:	TipoAudio;
  valorIngresso: number;
  filmeId: string;
  salaId:	string;
}
