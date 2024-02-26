import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { ContractsComponent } from './components/contracts/contracts.component';


const routes: Routes = [
  {path: '', component: FormsComponent},
  {path: 'sucesso/:id', component: ContractsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
