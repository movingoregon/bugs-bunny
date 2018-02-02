import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebContainerComponent } from './web-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

describe('WebContainerComponent', () => {
  let component: WebContainerComponent;
  let fixture: ComponentFixture<WebContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [WebContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
