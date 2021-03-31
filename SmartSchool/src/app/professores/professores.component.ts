import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public professorForm: FormGroup;
  public titulo = "Professores";
  public professorSelecionado: Professor;
  public professores = [
    { id: 1, nome: "Maria", sobrenome: "Vieira", telefone: 62985546542, disciplina: "Matemática" },
    { id: 2, nome: "José", sobrenome: "Santos", telefone: 62984417454, disciplina: "Português" },
    { id: 3, nome: "Pedro", sobrenome: "João", telefone: 62987789654, disciplina: "História" },
    { id: 4, nome: "Ana", sobrenome: "Souza", telefone: 62983365241, disciplina: "Física" }
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['',Validators.required] ,
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required]
    })
  }

  professorSubmit(){

  }

  professorSelected(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }

  ngOnInit() {
  }

}
