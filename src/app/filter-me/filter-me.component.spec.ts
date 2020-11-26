import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMeComponent } from './filter-me.component';

describe('FilterMeComponent', () => {
  let component: FilterMeComponent;
  let fixture: ComponentFixture<FilterMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
