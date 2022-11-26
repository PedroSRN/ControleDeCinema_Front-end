import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from 'src/app/filmes/services/filme.service';
import { SalaService } from 'src/app/salas/services/sala.service';
import { SessaoService } from '../services/sessao.service';
import { FormsSessaoViewModel } from '../view-models/form-sessao.view-model';
import { TipoAudio } from '../view-models/tipoAudioEnum';
import { TipoSessao } from '../view-models/tipoSessaoEnum';

@Component({
  selector: 'app-editar-sessao',
  templateUrl: './editar-sessao.component.html',
  styles: [
  ]
})
export class EditarSessaoComponent implements OnInit {
  public formSessao: FormGroup;

  public salas = this.salaService.selecionarTodos();

  public filmes = this.filmeService.selecionarTodos();

  public tiposSessao = Object.values(TipoSessao)
  .filter(v => !Number.isFinite(v));

  public tiposAudio = Object.values(TipoAudio)
    .filter(v => !Number.isFinite(v));

  public sessaoFormVM : FormsSessaoViewModel = new FormsSessaoViewModel();

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private sessaoService: SessaoService,
    private salaService: SalaService,
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) {
      titulo.setTitle('Editar Sessão - Controle de Cinema');
    }

  ngOnInit(): void {
    this.sessaoFormVM = this.route.snapshot.data['sessao']

    this.formSessao = this.formBuilder.group({
      data: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      tipoSessao: ['', [Validators.required]],
      tipoAudio: ['', [Validators.required]],
      valorIngresso: ['', [Validators.required]],
      filme: ['', [Validators.minLength(3)]],
      filmeId: ['', [Validators.minLength(3)]],
      sala: ['', [Validators.minLength(3)]],
      salaId: ['', [Validators.minLength(3)]],
    });

    this.formSessao.patchValue({
      id: this.sessaoFormVM.id,
      data: this.sessaoFormVM.data.toString().split("T")[0],
      horaInicio: this.sessaoFormVM.horaInicio,
      horaTermino: this.sessaoFormVM.horaTermino,
      tipoSessao: this.sessaoFormVM.tipoSessao,
      tipoAudio: this.sessaoFormVM.tipoAudio,
      valorIngresso: this.sessaoFormVM.valorIngresso,
      filmeId: this.sessaoFormVM.filmeId,
      salaId: this.sessaoFormVM.salaId,
  })
  }

  get data() {
    return this.formSessao.get('data');
  }
  get horaInicio() {
    return this.formSessao.get('horaInicio');
  }
  get horaTermino() {
    return this.formSessao.get('horaTermino');
  }
  get tipoSessao() {
    return this.formSessao.get('tipoSessao');
  }
  get tipoAudio() {
    return this.formSessao.get('tipoAudio');
  }
  get valorIngresso() {
    return this.formSessao.get('valorIngresso');
  }
  get filme() {
    return this.formSessao.get('filme');
  }
  get filmeId() {
    return this.formSessao.get('filmeId');
  }
  get sala() {
    return this.formSessao.get('sala');
  }
  get salaId() {
    return this.formSessao.get('salaId');
  }

  public gravar() {
    if (this.formSessao.invalid) {
      this.toastr.warning('Por favor, preencha o formulário corretamente antes de prosseguir.','Aviso');
      return;
    };

    this.sessaoFormVM = Object.assign({}, this.sessaoFormVM, this.formSessao.value);

    this.sessaoService.editar(this.sessaoFormVM)
      .subscribe({
        next: (sessaoEditada) => this.processarSucesso(sessaoEditada),
        error: (erro) => this.processarFalha(erro)
      })
  }

 private processarSucesso(sessao: FormsSessaoViewModel): void {
    this.router.navigate(['/sessoes/listar']);
    this.toastr.success('Sessão Editada com sucesso.','Edição de Sessões');
  }

  private processarFalha(erro: any) {
    if(erro) {
      this.toastr.error(erro, 'Ediçao de Sessões');
      console.error(erro);
    }
  }
}
