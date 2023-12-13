import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEgresoComponent } from './ver-egreso.component';

describe('VerEgresoComponent', () => {
  let component: VerEgresoComponent;
  let fixture: ComponentFixture<VerEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
