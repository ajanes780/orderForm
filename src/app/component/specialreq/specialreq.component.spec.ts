import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialreqComponent } from './specialreq.component';

describe('SpecialreqComponent', () => {
  let component: SpecialreqComponent;
  let fixture: ComponentFixture<SpecialreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
