import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEquipaComponent } from './tab-equipa.component';

describe('TabEquipaComponent', () => {
  let component: TabEquipaComponent;
  let fixture: ComponentFixture<TabEquipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEquipaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
