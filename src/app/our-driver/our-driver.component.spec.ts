import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDriverComponent } from './our-driver.component';

describe('OurDriverComponent', () => {
  let component: OurDriverComponent;
  let fixture: ComponentFixture<OurDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
