import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinComponent } from './jardin.component';

describe('JardinComponent', () => {
  let component: JardinComponent;
  let fixture: ComponentFixture<JardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
