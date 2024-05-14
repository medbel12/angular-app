import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrComponent } from './app-err.component';

describe('AppErrComponent', () => {
  let component: AppErrComponent;
  let fixture: ComponentFixture<AppErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppErrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
