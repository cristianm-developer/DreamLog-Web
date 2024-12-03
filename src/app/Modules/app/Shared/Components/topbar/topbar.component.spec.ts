import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import { Router, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { FirebaseAuthService } from '../../Services/firebase-auth.service';
import { InjectionToken, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../../../../../environments/environment';


describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  let mockFirebaseAuthService: jasmine.SpyObj<FirebaseAuthService>; 
  let mockAngularFireAuth: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(async () => {
    mockFirebaseAuthService = jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', ['logout'])

    await TestBed.configureTestingModule({
      imports:[RouterModule.forRoot([])],
      declarations: [TopbarComponent],
      providers: [
        { provide: FirebaseAuthService, useValue: mockFirebaseAuthService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach( () => {
    localStorage.clear();
  })

  it('test', () => { expect(1).toBeTruthy()})

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define if there is a logged user', () => {
    expect(component.flgUserWithLogin).withContext('there are not user in localstorage but flgUserWithLogin is true').toBeFalse();
    
    localStorage.setItem('user', 'userTest');
    fixture = TestBed.createComponent(TopbarComponent);
    expect(fixture.componentInstance.flgUserWithLogin).withContext('there is an user logged in localstorage, but flg is false').toBeTrue();

  })

  it('should display the logo with the correct link when logged in', () => {
    component.flgUserWithLogin = true;
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('#Logo a')).nativeElement;
    expect(link.getAttribute('href')).toBe('/app');
  });

  it('should display the logo with the correct link when not logged in', () => {
    component.flgUserWithLogin = false;
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('#Logo a')).nativeElement;
    expect(link.getAttribute('href')).toBe('/');
  });

  it('should render the logout button when user is logged in', () => {
    component.flgUserWithLogin = true;
    fixture.detectChanges();

    const logoutButton = fixture.debugElement.query(By.css('button'));
    expect(logoutButton).toBeTruthy();
  });

  it('should not render the logout button when user is not logged in', () => {
    component.flgUserWithLogin = false;
    fixture.detectChanges();

    const logoutButton = fixture.debugElement.query(By.css('button'));
    expect(logoutButton).toBeNull();
  });

  it('should call logout method when logout button is clicked', () => {
    spyOn(component, 'logout'); // Espía el método logout
    component.flgUserWithLogin = true;
    fixture.detectChanges();

    const logoutButton = fixture.debugElement.query(By.css('button'));
    logoutButton.nativeElement.click();

    expect(component.logout).toHaveBeenCalled();
  });
});
