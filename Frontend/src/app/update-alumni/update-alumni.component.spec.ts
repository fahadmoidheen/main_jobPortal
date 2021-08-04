import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlumniComponent } from './update-alumni.component';

describe('UpdateAlumniComponent', () => {
  let component: UpdateAlumniComponent;
  let fixture: ComponentFixture<UpdateAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
