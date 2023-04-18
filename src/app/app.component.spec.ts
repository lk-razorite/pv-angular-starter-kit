import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [AppComponent],
=======
      declarations: [
        AppComponent
      ],
>>>>>>> b3fc051 (initial commit - using ng new)
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'poshvine-angular-starter-kit'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('poshvine-angular-starter-kit');
=======
  it(`should have as title 'pv-angular-starter-kit'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pv-angular-starter-kit');
>>>>>>> b3fc051 (initial commit - using ng new)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('poshvine-angular-starter-kit app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('pv-angular-starter-kit app is running!');
>>>>>>> b3fc051 (initial commit - using ng new)
  });
});
