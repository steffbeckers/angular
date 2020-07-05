import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JonasComponent } from './jonas.component';

describe('JonasComponent', () => {
  let component: JonasComponent;
  let fixture: ComponentFixture<JonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JonasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
