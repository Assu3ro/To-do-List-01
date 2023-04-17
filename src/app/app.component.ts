import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tarefas = [
    {
      nome: 'To do List 1',
      descricao: 'Planejamento - Dias Úteis',
      checklist: [
        {
          nome: 'Tomar café!',
          concluido: true,
        },
        {
          nome: 'Trabalhar',
          concluido: false,
        },
        {
          nome: 'Almoçar',
          concluido: false,
        },
        {
          nome: 'Trabalhar',
          concluido: false,
        },
        {
          nome: 'Academia',
          concluido: false,
        }
      ]
    },
    {
      nome: 'To do List 2',
      descricao: 'Planejamento - Final de Semana',
      checklist: [
        {
          nome: 'Correr',
          concluido: false,
        },
        {
          nome: 'Tomar Café!',
          concluido: false,
        },
        {
          nome: 'Estudar',
          concluido: false,
        },
        {
          nome: 'Jogar Basquete',
          concluido: false,
        },
      ]
    },
    {
      nome: 'To do List 3',
      descricao: 'Planejamento - Feriado',
      checklist: [
        {
          nome: 'Tomar suco!',
          concluido: false,
        },
        {
          nome: 'Pedalar',
          concluido: false,
        },
        {
          nome: 'Descansar',
          concluido: false,
        },
      ]
    }
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {

    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }



}
