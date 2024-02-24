import { Component, OnInit } from '@angular/core';
import { Emprestimos } from './emprestimos';
import { EmprestimosService } from './emprestimos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  solicitaEmprestimo = {
    nome: '',
    valorSolicitado: 0,
    nParcelas: 0,
  }

  emprestimo: Emprestimos = {
    valorParcelas: 0,
    numeroParcelas: 0,
    valorTotal: 0
  }

  showModal = false;

  arrayEmprestimoList = []

  emprestimosList: Emprestimos[] = []

  meuForms!: FormGroup;

  constructor(private service: EmprestimosService, private fb: FormBuilder) { 
    this.meuForms = this.fb.group({
      name: ['', Validators.required],
      valor: ['', Validators.required],
      parcelas: ['', Validators.required]
    });
    }

  // CRIA UM OBJETO COM OS VALORES QUE DEVEM SER IMPRIMIDOS E FAZ UM PUSH NO ARRAY ACIMA PARA ALTERAÇÃO DO DOM
  // CONTEM A LOGICA DOS CALCULOS FEITOS PARA FAZER A FUNCIONALIDADE DOS JUROS

  criaEmprestimo(): void{

    const juros = 0.05;
    const valorTotalJuros = this.solicitaEmprestimo.valorSolicitado *  ( 1 + this.solicitaEmprestimo.nParcelas * juros )
    const valorParcelas = valorTotalJuros / this.solicitaEmprestimo.nParcelas

    const emprestimo = {
      nome: this.solicitaEmprestimo.nome,
      valorTotalJuros: valorTotalJuros,
      numeroParcelas: this.solicitaEmprestimo.nParcelas,
      valorParcelas: valorParcelas
    }

    if (this.meuForms.valid && this.solicitaEmprestimo.nParcelas > 0 && this.solicitaEmprestimo.valorSolicitado > 0) {
      if (this.arrayEmprestimoList.length == 0) {
        this.arrayEmprestimoList.push(emprestimo)
      } else {
        this.arrayEmprestimoList.splice(0, 1, emprestimo);
      }
    } else {
      console.log('Formulário inválido. Verifique os erros.');
    }
  }


// FUNÇÃO FAZ UM POST PARA O JSON-SERVER  \/

  confirmaEmprestimo(): void{
    
      const juros = 0.05;
      const valorTotalJuros = this.solicitaEmprestimo.valorSolicitado *  ( 1 + this.solicitaEmprestimo.nParcelas * juros )
      const valorParcelas = valorTotalJuros / this.solicitaEmprestimo.nParcelas
  
      const emprestimo: Emprestimos = {
        valorParcelas: valorTotalJuros,
        numeroParcelas: this.solicitaEmprestimo.nParcelas,
        valorTotal: valorParcelas
      }

      this.service.postEmprestimos(emprestimo).subscribe()
      this.showModal = !this.showModal
      console.log(this.emprestimosList)

  }

  confirmaModal(){
    if(this.arrayEmprestimoList.length > 0){
      this.showModal = !this.showModal
    }else{
      alert('Cadastre para confirmar!')
    }
  }

  cancelaModal(){
    this.showModal = !this.showModal
  }

  // FAZ UM GET NO JSON-SERVER E RETORNA OS OBJS CADASTRADOS tirar \/

  ngOnInit(): void {

  }


}
