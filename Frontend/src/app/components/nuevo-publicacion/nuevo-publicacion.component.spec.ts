import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPublicacionComponent } from './nuevo-publicacion.component';

describe('NuevoPublicacionComponent', () => {
  let component: NuevoPublicacionComponent;
  let fixture: ComponentFixture<NuevoPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
