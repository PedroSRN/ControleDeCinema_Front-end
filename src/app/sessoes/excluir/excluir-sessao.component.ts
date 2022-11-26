import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessaoService } from '../services/sessao.service';
import { VisualizarSessaoViewModel } from '../view-models/visualizar-sessao.view-model';

@Component({
  selector: 'app-excluir-sessao',
  templateUrl: './excluir-sessao.component.html',
  styles: [
  ]
})
export class ExcluirSessaoComponent implements OnInit {
  public sessaoFormVM: VisualizarSessaoViewModel = new VisualizarSessaoViewModel();

  constructor(
    titulo: Title,
    private route: ActivatedRoute,
    private router: Router,
    private sessaoService: SessaoService,
    private toastr: ToastrService

  ) {
    titulo.setTitle('Excluir Sessão - Controle de Cinema');
  }

  ngOnInit(): void {
    this.sessaoFormVM = this.route.snapshot.data['sessao']
  }

  public gravar(){

    this.sessaoService.excluir(this.sessaoFormVM.id)
      .subscribe({
        next: (sessaoId) => this.processarSucesso(sessaoId),
        error: (erro) => this.processarFalha(erro)
    })
  }

  private processarSucesso(sessaoId: string): void {
    this.router.navigate(['/sessoes/listar']);
    this.toastr.success('Sessão Exclúida com sucesso.','Exclusão de Sessões');

  }

  private processarFalha(erro: any) {
    if (erro) {
      this.toastr.error(erro, 'Exclusão de Sessões');
      console.error(erro);
    }
  }

}
