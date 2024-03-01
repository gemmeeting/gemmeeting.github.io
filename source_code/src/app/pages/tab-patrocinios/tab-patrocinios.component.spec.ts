import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPatrociniosComponent } from './tab-patrocinios.component';

describe('TabPatrociniosComponent', () => {
  let component: TabPatrociniosComponent;
  let fixture: ComponentFixture<TabPatrociniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPatrociniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPatrociniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
