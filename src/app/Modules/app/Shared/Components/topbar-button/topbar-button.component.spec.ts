import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarButtonComponent } from './topbar-button.component';
import { RouterModule } from '@angular/router';

describe('TopbarButtonComponent', () => {
  let component: TopbarButtonComponent;
  let fixture: ComponentFixture<TopbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterModule ],
      declarations: [TopbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
