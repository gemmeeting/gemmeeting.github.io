import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedIntroComponent } from './animated-intro.component';

describe('AnimatedIntroComponent', () => {
  let component: AnimatedIntroComponent;
  let fixture: ComponentFixture<AnimatedIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
