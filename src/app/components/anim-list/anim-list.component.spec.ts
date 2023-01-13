import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimListComponent } from './anim-list.component';

describe('AnimListComponent', () => {
  let component: AnimListComponent;
  let fixture: ComponentFixture<AnimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
