import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Emprestimos } from './emprestimos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpConfirmacaoComponent } from '../pop-up-confirmacao/pop-up-confirmacao.component';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush})

export class FormsComponent implements OnInit{

  @Input() color: ThemePalette = 'primary';

  visualizacaoEmprestimo?: Emprestimos
  
  meuForms!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private cd: ChangeDetectorRef) { 
    this.meuForms = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      valor: ['', [Validators.required, Validators.min(1)]],
      parcelas: ['', [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]*$/)]],
      taxaJuros: [5, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9.]*$/)]],
      taxaModel: ['1', Validators.required]
    }); }

  ngOnInit(): void {
    this.createObservable()
  }

  createObservable(): void {
    this.meuForms.valueChanges.subscribe((value) => {
      this.visualizacaoEmprestimo = undefined
    })
  }

  simulaEmprestimo(): void{

    const formValue = this.meuForms.getRawValue()

    let valorTotalJuros
    let valorParcelas
    
    if (this.meuForms.valid) {

      if (formValue.taxaModel == '2') {

        const juros = formValue.taxaJuros / 100;
        valorTotalJuros = formValue.valor * (1 + formValue.parcelas * juros)
        valorParcelas = valorTotalJuros / formValue.parcelas
      } else {

        const juros = formValue.taxaJuros / 100;
        valorTotalJuros = formValue.valor + (formValue.valor * juros)
        valorParcelas = valorTotalJuros / formValue.parcelas
      }

      this.visualizacaoEmprestimo = {
        nome: formValue.name,
        valorTotal: valorTotalJuros,
        numeroParcelas: formValue.parcelas,
        valorParcelas: valorParcelas
      }

    } else{

      Object.keys(this.meuForms.controls).forEach((field) => {
        const control = this.meuForms.get(field);
        control?.markAsTouched();
      });
    }

    this.cd.markForCheck()
  }
    
  abrirModal(){

    if (this.visualizacaoEmprestimo) {
      const ref = this.dialog.open(PopUpConfirmacaoComponent, {
        data: this.visualizacaoEmprestimo
      })

      ref.afterClosed().pipe(take(1)).subscribe((res) => {
        if (res && res.id) {
          this.router.navigate(['/sucesso', res.id])
        }
      })
    }
  }
}
