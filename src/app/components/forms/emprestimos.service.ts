import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emprestimos } from './emprestimos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  private url = `${environment.url}/emprestimos`

  constructor(private http: HttpClient) {}

  getEmprestimo(id: number): Observable<Emprestimos> {
    return this.http.get<Emprestimos>(`${this.url}/${id}`)
  } 
  
  postEmprestimos(emprestimos: Emprestimos): Observable<Emprestimos> {
    return this.http.post<Emprestimos>(this.url, emprestimos)
  }

}
