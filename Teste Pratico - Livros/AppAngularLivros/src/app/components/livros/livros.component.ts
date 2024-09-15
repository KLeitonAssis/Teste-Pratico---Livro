import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { LivrosService } from '../../livros.service';
import { HttpClient  } from '@angular/common/http';
import { Livro } from '../../Livro';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  
  formulario!: FormGroup; 
  tituloFormulario!: string;
  livros!: Livro[];


  visibilidadeTable: boolean = true;
  visibilidadeFormulario: boolean = false;


  constructor(private livrosService: LivrosService, private http: HttpClient) { }

  ngOnInit(): void {

    this.livrosService.PegarTodosLivros().subscribe(resultado => {
      this.livros = resultado
    });

    
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTable = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = "Novo Livro";
    this.formulario = new FormGroup({
      tituloLivro: new FormControl(null),
      escritora: new FormControl(null),
      paginas: new FormControl(null),
      sinopse: new FormControl(null)
    });
  }

  ExibirFormularioAtualizacao(livroId: number): void{
    this.visibilidadeTable = false;
    this.visibilidadeFormulario = true;

    this.livrosService.PegarLivrosId(livroId).subscribe(resultado => {
      this.tituloFormulario = `Atualizar: ${resultado.tituloLivro}, Escritora: ${resultado.escritora}?`;

      this.formulario = new FormGroup({
        livroId: new FormControl(resultado.livroId),
        tituloLivro: new FormControl(resultado.tituloLivro),
        escritora: new FormControl(resultado.escritora),
        paginas: new FormControl(resultado.paginas),
        sinopse: new FormControl(resultado.sinopse)
      });
    });
  }

  EnviarFormulario(): void {
   const livro: Livro = this.formulario.value;

    if(livro.livroId > 0){
      this.livrosService.AtualizarLivro(livro).subscribe(resultado =>{
        this.visibilidadeFormulario = false;
        this.visibilidadeTable = true;
         alert('Pessoa atualizada com sucesso');
         this.livrosService.PegarTodosLivros().subscribe(registros => {
          this.livros = registros;
      })
    });
  }
    else{
      this.livrosService.SalvarLivro(livro).subscribe(resultado =>{
       this.visibilidadeFormulario = false;
       this.visibilidadeTable = true;
        alert('Pessoa inserida com sucesso');
        this.livrosService.PegarTodosLivros().subscribe(registros => {
         this.livros = registros;
        });
      });
    }
  }

  Voltar(): void{
   this.visibilidadeTable = true;
   this.visibilidadeFormulario = false;
  }
  
  ExcluirLivro(livroId: number){
    this.livrosService.ExcluirLivro(livroId).subscribe(resultado =>{
      alert('Livro excluído com sucesso');
      this.livrosService.PegarTodosLivros().subscribe(registros => {
        this.livros = registros;
      });
    })
  }
}
