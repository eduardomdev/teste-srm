import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Emprestimos } from '../forms/emprestimos';
import { EmprestimosService } from '../forms/emprestimos.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pop-up-confirmacao',
  templateUrl: './pop-up-confirmacao.component.html',
  styleUrls: ['./pop-up-confirmacao.component.css']
})
export class PopUpConfirmacaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Emprestimos, private service: EmprestimosService)  {
  }

  ngOnInit(): void {
  }

  error = false
  loading = false

  confirmar():void {
    
    this.loading = true

    this.service.postEmprestimos(this.data).pipe(take(1)).subscribe({
      next: (res) => {
        this.dialogRef.close({id: res.id});
        this.loading = false
      },
      error: (err) => { this.error = true; this.loading = false }
    })
  }

  cancelar():void {
    this.dialogRef.close(false)
  }
}
