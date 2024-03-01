import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabResumosComponent } from './tab-resumos.component';

describe('TabResumosComponent', () => {
  let component: TabResumosComponent;
  let fixture: ComponentFixture<TabResumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabResumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabResumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
