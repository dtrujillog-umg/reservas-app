import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpleadoComponentComponent } from './epleado-component.component';

describe('EpleadoComponentComponent', () => {
  let component: EpleadoComponentComponent;
  let fixture: ComponentFixture<EpleadoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpleadoComponentComponent]
    });
    fixture = TestBed.createComponent(EpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
