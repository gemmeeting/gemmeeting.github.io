import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContactosComponent } from './tab-contactos.component';

describe('TabContactosComponent', () => {
  let component: TabContactosComponent;
  let fixture: ComponentFixture<TabContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
