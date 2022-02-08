import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeComponent } from './card-home.component';

describe('CardHomeComponent', () => {
  let component: CardHomeComponent;
  let fixture: ComponentFixture<CardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
