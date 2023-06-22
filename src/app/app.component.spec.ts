import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
      declarations: [AppComponent],
=======
      declarations: [
        AppComponent
      ],
>>>>>>> b3fc051 (initial commit - using ng new)
=======
      declarations: [AppComponent],
>>>>>>> 975762a (feat(CODE-26): added intial setups of eslint + prettier + lint-staged + precommit hook + commit-msg hook)
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
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('poshvine-angular-starter-kit app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('pv-angular-starter-kit app is running!');
>>>>>>> b3fc051 (initial commit - using ng new)
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'pv-angular-starter-kit app is running!'
    );
>>>>>>> 975762a (feat(CODE-26): added intial setups of eslint + prettier + lint-staged + precommit hook + commit-msg hook)
=======
  it('should create the app', async () => {
    await render(AppComponent);
    expect(screen.getByText(/pv-angular-starter-kit/i)).toBeInTheDocument();
>>>>>>> 601c88a (feat(CODE-42): setup of testing framework changes)
  });
});
