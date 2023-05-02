import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivoComponent } from './cultivo.component';

describe('CultivoComponent', () => {
  let component: CultivoComponent;
  let fixture: ComponentFixture<CultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
