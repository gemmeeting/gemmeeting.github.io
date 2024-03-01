import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProgramaComponent } from './tab-programa.component';

describe('TabProgramaComponent', () => {
  let component: TabProgramaComponent;
  let fixture: ComponentFixture<TabProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
