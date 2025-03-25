import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  imports: [FormsModule, CommonModule ],
})
export class ListaTarefasComponent {
  tarefas: string[] = ['Programar', 'Almoçar', 'Dormir'];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
