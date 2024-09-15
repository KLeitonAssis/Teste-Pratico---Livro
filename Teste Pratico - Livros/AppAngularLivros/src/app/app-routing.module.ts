import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './components/livros/livros.component';

const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  { path: '', redirectTo: '/livros', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
