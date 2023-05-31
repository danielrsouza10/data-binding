import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://www.uol.com.br';
  cursoAngular: boolean = false;
  urlImage: string = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'def',
    idade: 32,
    endereco: {
      rua: 'R-16',
    },
  };

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Fui clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}
}
