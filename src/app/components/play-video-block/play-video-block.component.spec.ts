import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoBlockComponent } from './play-video-block.component';

describe('PlayVideoBlockComponent', () => {
  let component: PlayVideoBlockComponent;
  let fixture: ComponentFixture<PlayVideoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideoBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayVideoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
