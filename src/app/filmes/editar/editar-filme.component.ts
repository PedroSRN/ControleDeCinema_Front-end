import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from '../services/filme.service';
import { FormsFilmeViewModel } from '../view-models/form-filme.view-model';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styles: [
  ]
})
export class EditarFilmeComponent implements OnInit {
  public formFilme: FormGroup;

  public filmeFormVM : FormsFilmeViewModel = new FormsFilmeViewModel();

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
    ) {
      titulo.setTitle('Editar Filme - Controle de Cinema');
    }

  ngOnInit(): void {
    this. filmeFormVM = this.route.snapshot.data['filme'];

    this.formFilme = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      duracao: ['', [Validators.required]],
      descricao: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.formFilme.patchValue({
      id: this.filmeFormVM.id,
      titulo: this.filmeFormVM.titulo,
      duracao: this.filmeFormVM.duracao,
      descricao: this.filmeFormVM.descricao,

    })
  }

  get titulo() {
    return this.formFilme.get('titulo');
  }
  get duracao() {
    return this.formFilme.get('duracao');
  }
  get descricao() {
    return this.formFilme.get('descricao');
  }


  public gravar() {
    if (this.formFilme.invalid) {
      this.toastr.warning('Por favor, preencha o formulário corretamente antes de prosseguir.','Aviso');
      return;
    };

    this.filmeFormVM = Object.assign({}, this.filmeFormVM, this.formFilme.value);

    this.filmeService.editar(this.filmeFormVM)
      .subscribe({
        next: (filmeEditado) => this.processarSucesso(filmeEditado),
        error: (erro) => this.processarFalha(erro)
      })
  }

 private processarSucesso(filme: FormsFilmeViewModel): void {
    this.router.navigate(['/filmes/listar']);
    this.toastr.success('Filme Editado com sucesso.','Edição de Filmes');
  }

  private processarFalha(erro: any) {
    if(erro) {
      this.toastr.error(erro, 'Ediçao de Filmes');

      console.error(erro);
    }
  }

}
