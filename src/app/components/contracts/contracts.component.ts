import { Component, OnInit } from '@angular/core';
import { Emprestimos } from '../forms/emprestimos';
import { EmprestimosService } from '../forms/emprestimos.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  successList: Emprestimos[] = []

  constructor(private service: EmprestimosService) { }

  emprestimosList: Emprestimos[] = []

  testeGet(): void{
    console.log(this.emprestimosList)
  }

  obterUltimoItem(): Emprestimos | undefined {
    return this.emprestimosList.length > 0 ? this.emprestimosList[this.emprestimosList.length - 1] : undefined;
  }

  ngOnInit(): void {
    this.service.getEmprestimos().subscribe((emprestimosList) => {
      this.emprestimosList = emprestimosList
      const ultimoItem = this.obterUltimoItem();
      this.successList.push(ultimoItem)

    })
  }

}
