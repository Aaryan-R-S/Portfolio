import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootFooterComponent } from './foot-footer.component';

describe('FootFooterComponent', () => {
  let component: FootFooterComponent;
  let fixture: ComponentFixture<FootFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
