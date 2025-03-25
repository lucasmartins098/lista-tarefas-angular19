import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'lista-tarefas', component: ListaTarefasComponent },
];
