import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatematerialComponent } from './ratematerial.component';

describe('RatematerialComponent', () => {
  let component: RatematerialComponent;
  let fixture: ComponentFixture<RatematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatematerialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
