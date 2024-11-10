import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamViewComponent } from './dream-view.component';

describe('DreamViewComponent', () => {
  let component: DreamViewComponent;
  let fixture: ComponentFixture<DreamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DreamViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
