import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emprestimos } from './emprestimos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  private url = "http://localhost:3000/emprestimos"

  constructor(private http: HttpClient) {}

  getEmprestimos(): Observable<Emprestimos[]> {
    return this.http.get<Emprestimos[]>(this.url)
  }

  //METODO POST > UTILIZAR NO COMPONENTE DA ROTA DA TELA FINAL.
  
  postEmprestimos(emprestimos: Emprestimos): Observable<Emprestimos[]> {
    return this.http.post<Emprestimos[]>(this.url, emprestimos)
  }

}
