import { Injectable } from "@angular/core";
import { TokenViewModel, UsuarioTokenViewModel } from "../view-models/token.view-model";

@Injectable()
export class LocalStorageService {

  public salvarDadosLocaisUsuario(resposta: TokenViewModel): void {
    this.salvarTokenUsuario(resposta.chave);
    this.salvarUsuario(resposta.usuarioToken);

  }
  public salvarTokenUsuario(token: string) {
    localStorage.setItem('ControleCinema.token', token);
  }

  public salvarUsuario(usuario:UsuarioTokenViewModel) {
    const jsonString = JSON.stringify(usuario);
    localStorage.setItem('ControleCinema.usuario', jsonString);
  }

  public obterUsuarioLogado() {
    const usuarioJson = localStorage.getItem('ControleCinema.usuario');

    if(usuarioJson)
      return JSON.parse(usuarioJson) as UsuarioTokenViewModel;

    return null;
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('ControleCinema.token') ?? '';
  }

  public limparDadosLocais() {
    localStorage.removeItem('ControleCinema.token');
    localStorage.removeItem('ControleCinema.usuario');
  }
}
