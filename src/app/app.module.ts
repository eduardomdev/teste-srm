import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContractsComponent } from './components/contracts/contracts.component';
import { PopUpConfirmacaoComponent } from './components/pop-up-confirmacao/pop-up-confirmacao.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';



export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    ContractsComponent,
    PopUpConfirmacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
