import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './components/livros/livros.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  { path: '', redirectTo: '/livros', pathMatch: 'full' },
  { path: '**', redirectTo: '/livros' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule 
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}