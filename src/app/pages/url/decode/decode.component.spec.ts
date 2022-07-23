import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDecodeComponent } from './decode.component';

describe('DecodeComponent', () => {
  let component: UrlDecodeComponent;
  let fixture: ComponentFixture<UrlDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlDecodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
