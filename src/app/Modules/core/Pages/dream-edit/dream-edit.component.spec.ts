import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamEditComponent } from './dream-edit.component';

describe('DreamEditComponent', () => {
  let component: DreamEditComponent;
  let fixture: ComponentFixture<DreamEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DreamEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
