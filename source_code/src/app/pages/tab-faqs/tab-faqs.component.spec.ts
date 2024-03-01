import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFaqsComponent } from './tab-faqs.component';

describe('TabFaqsComponent', () => {
  let component: TabFaqsComponent;
  let fixture: ComponentFixture<TabFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
