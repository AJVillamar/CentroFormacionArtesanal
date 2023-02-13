import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDatosComponent } from './ficha-datos.component';

describe('FichaDatosComponent', () => {
  let component: FichaDatosComponent;
  let fixture: ComponentFixture<FichaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
