import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpConfirmacaoComponent } from './pop-up-confirmacao.component';

describe('PopUpConfirmacaoComponent', () => {
  let component: PopUpConfirmacaoComponent;
  let fixture: ComponentFixture<PopUpConfirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpConfirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
