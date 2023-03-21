import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreirosZComponent } from './guerreiros-z.component';

describe('GuerreirosZComponent', () => {
  let component: GuerreirosZComponent;
  let fixture: ComponentFixture<GuerreirosZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuerreirosZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreirosZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
