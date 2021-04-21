import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedpotatoComponent } from './bakedpotato.component';

describe('BakedpotatoComponent', () => {
  let component: BakedpotatoComponent;
  let fixture: ComponentFixture<BakedpotatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakedpotatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedpotatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
