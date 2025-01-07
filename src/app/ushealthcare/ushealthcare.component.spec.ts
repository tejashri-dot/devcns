import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UshealthcareComponent } from './ushealthcare.component';

describe('UshealthcareComponent', () => {
  let component: UshealthcareComponent;
  let fixture: ComponentFixture<UshealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UshealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UshealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
