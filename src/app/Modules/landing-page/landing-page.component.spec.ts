import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    window.localStorage.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if user is logged when is created', () =>{
    window.localStorage.setItem('user', 'userLoggedData');
    let f2 = TestBed.createComponent(LandingPageComponent);
    let c2 = f2.componentInstance;
    expect(c2.flgUserWithLogin).toBeTrue();
  })

  it('should have header with Logo, routes(Welcome, news, about us, colaborate), and a button to go to app', () =>{
    fixture.detectChanges();
    let header = fixture.debugElement.query(By.css('header'));
    expect(header).withContext('Header is missing').toBeTruthy();

    let logo = header.query(By.css('#Logo'));
    expect(logo).withContext('Logo is missing').toBeTruthy();
    let logoImg = logo.query(By.css('img'));
    expect(logoImg).withContext('img element in Logo is missing').toBeTruthy();
    let logoImgSrc = logoImg.attributes['src'] as string;
    expect(logoImgSrc.endsWith('.svg')).withContext('Logo Img is not a SVG').toBeTrue() ;
    
    let nav = header.query(By.css('nav'));
    let navsItems = nav.queryAll(By.css('a'));
    let links = ['home', 'news', 'aboutUs', 'colaborate'];
    expect(navsItems.every(i => i.attributes['routerLinkActive'])).withContext('Some items in nav bar have not routerLinkActive class').toBeTrue()
    let linksUsed = navsItems.map(i => (i.properties['href'] as String)?.replace(/http.+\//, ''));
    expect(links.every(li => linksUsed.includes(li))).withContext('Any primary link is missing on nav bar').toBeTrue();
  
    let button = fixture.debugElement.query(By.css('header #AppButton a'));
    expect(button).withContext('button to go to App not found').toBeTruthy();
    expect(button.attributes['href']?.endsWith('app')).withContext('href to app not found on button App').toBeTrue();
  
    expect(button.nativeElement.textContent).toBe('Start now for free');
    component.flgUserWithLogin = true;
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toBe('Go to App');
  })

  it('should have a elemnt main with a router-outlet', () => {
    let main = fixture.debugElement.query(By.css('main'));
    let routerOutlet = fixture.debugElement.query(By.css('main router-outlet'));

    expect(main).withContext('main element is missing').toBeTruthy();
    expect(routerOutlet).withContext('router outlet is missins').toBeTruthy();
  })

  it('should have a footer with href to github', () => {
    let footer = fixture.debugElement.query(By.css('footer'));
    let gitHubLink = footer.queryAll(By.css('a'));
    let hrefs = gitHubLink.map(i => i.attributes['href']);
    expect(footer).withContext('footer is missing').toBeTruthy();
    expect(hrefs.some(h => h?.includes('github.com'))).withContext('Github link is missing').toBeTrue();
  })

});
