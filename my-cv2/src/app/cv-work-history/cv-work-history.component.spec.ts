import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvWorkHistoryComponent } from './cv-work-history.component';

describe('CvWorkHistoryComponent', () => {
  let component: CvWorkHistoryComponent;
  let fixture: ComponentFixture<CvWorkHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvWorkHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
