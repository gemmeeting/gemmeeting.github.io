import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInscricoesComponent } from './tab-inscricoes.component';

describe('TabInscricoesComponent', () => {
  let component: TabInscricoesComponent;
  let fixture: ComponentFixture<TabInscricoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInscricoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabInscricoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
