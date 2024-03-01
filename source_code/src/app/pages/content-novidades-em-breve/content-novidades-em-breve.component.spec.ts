import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNovidadesEmBreveComponent } from './content-novidades-em-breve.component';

describe('ContentNovidadesEmBreveComponent', () => {
  let component: ContentNovidadesEmBreveComponent;
  let fixture: ComponentFixture<ContentNovidadesEmBreveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNovidadesEmBreveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNovidadesEmBreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
