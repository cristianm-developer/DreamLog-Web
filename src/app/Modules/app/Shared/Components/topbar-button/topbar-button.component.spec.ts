import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarButtonComponent } from './topbar-button.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { object } from '@angular/fire/database';

describe('TopbarButtonComponent', () => {
  let component: TopbarButtonComponent;
  let fixture: ComponentFixture<TopbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterModule ],
      declarations: [TopbarButtonComponent],
      providers:[
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an element with a href equals link', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('a.navBtn'));

    expect(el).toBeTruthy();

    let link = 'testUrl';
    component.link = ['testUrl'];
    expect(el.attributes['href'] == link);

  });

  it('should create an element with icon if it exist', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('a.navBtn'));

    expect(el).toBeTruthy();

    let icon = 'testIcon';
    component.icon = icon;
    let classIcon =  !el.classes['bi'] && !el.classes[`${component.icon}`];
    fixture.detectChanges();

    expect(classIcon).toBeTrue();
  });

  it('should create an element with title if it exist', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('a.navBtn'));

    expect(el).toBeTruthy();

    let title = 'testTitle';
    component.title = title;
    fixture.detectChanges();
    let elTitle =  el.nativeElement.innerText;
    expect(elTitle).toBe(title);
  });

});
