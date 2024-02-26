import { Component, OnInit } from '@angular/core';
import { Emprestimos } from '../forms/emprestimos';
import { EmprestimosService } from '../forms/emprestimos.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private service: EmprestimosService, private activatedRoute: ActivatedRoute) {}
   
  emprestimoSucesso?: Emprestimos

  ngOnInit(): void {
    this.getEmprestimo()
  }

  getEmprestimo(): void {

    const idEmprestimo = this.activatedRoute.snapshot.params['id']

    if (idEmprestimo) {
      this.service.getEmprestimo(idEmprestimo).pipe(take(1)).subscribe({
        next: (res) => { this.emprestimoSucesso = res },
      })
    }
  }

}
