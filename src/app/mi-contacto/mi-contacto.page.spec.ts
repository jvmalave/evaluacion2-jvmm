import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiContactoPage } from './mi-contacto.page';

describe('MiContactoPage', () => {
  let component: MiContactoPage;
  let fixture: ComponentFixture<MiContactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
