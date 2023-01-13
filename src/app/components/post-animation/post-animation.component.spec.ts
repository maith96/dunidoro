import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnimationComponent } from './post-animation.component';

describe('PostAnimationComponent', () => {
  let component: PostAnimationComponent;
  let fixture: ComponentFixture<PostAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
