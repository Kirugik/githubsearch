import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuserProfileComponent } from './githubuser-profile.component';

describe('GithubuserProfileComponent', () => {
  let component: GithubuserProfileComponent;
  let fixture: ComponentFixture<GithubuserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubuserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
