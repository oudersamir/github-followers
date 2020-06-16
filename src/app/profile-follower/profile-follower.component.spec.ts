import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowerComponent } from './profile-follower.component';

describe('ProfileFollowerComponent', () => {
  let component: ProfileFollowerComponent;
  let fixture: ComponentFixture<ProfileFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
