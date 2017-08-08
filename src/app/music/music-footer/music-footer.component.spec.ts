import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFooterComponent } from './music-footer.component';

describe('MusicFooterComponent', () => {
  let component: MusicFooterComponent;
  let fixture: ComponentFixture<MusicFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
