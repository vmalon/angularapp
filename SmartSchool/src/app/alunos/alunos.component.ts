import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public alunoForm: FormGroup;
  public titulo: string = "Alunos";
  public alunoSelecionado: Aluno;
  public mostraDetalhes: boolean;
  public alunos = [
    { id: 1, nome: "Vinicius", sobrenome: "Souza", telefone: 62985545687 },
    { id: 2, nome: "Thiago", sobrenome: "João", telefone: 62984457841 },
    { id: 3, nome: "João", sobrenome: "Maria", telefone: 629886653124 }
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['',Validators.required],
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required]
    });
  }

  alunoSubmit() {
  }
  
  alunoSelected(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  mostrarDetalhes(){
    this.mostraDetalhes = true;
  }

  voltar() {
    this.alunoSelecionado = null;
    this.mostraDetalhes = false;
  }


}
