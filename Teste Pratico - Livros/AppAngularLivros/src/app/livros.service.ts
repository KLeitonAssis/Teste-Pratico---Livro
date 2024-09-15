import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './Livro';

const httpOptiopns = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  url = 'http://localhost:5245/api/livros';

  constructor(private http: HttpClient) { }

  PegarTodosLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.url);
  }

  PegarLivrosId(livroId: number): Observable<Livro>{
    const apiUrl = `${this.url}/${livroId}`;
    return this.http.get<Livro>(apiUrl);
  }

  SalvarLivro(livro: Livro): Observable<any>{
    return this.http.post<Livro>(this.url, livro,httpOptiopns);
  }

  AtualizarLivro(livro: Livro): Observable<any>{
    return this.http.put<Livro>(this.url, livro,httpOptiopns);
  }

  ExcluirLivro(livroId: number): Observable<any>{
    const apiUrl = `${this.url}/${livroId}`;
    return this.http.delete<number>(apiUrl,httpOptiopns);
  }
}
