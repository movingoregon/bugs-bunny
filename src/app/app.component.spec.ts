import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.module';
import { HomeComponent } from './components/home/home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [
        AppComponent,
        HomeComponent
      ],
      providers: [Location],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {

    const router = TestBed.get(Router);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate([''])
      .then(() => {
        expect(router.url).toEqual('/home');
      });
  }));
});
