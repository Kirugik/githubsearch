import { TestBed } from '@angular/core/testing';

import { GithubuserProfileServiceService } from './githubuser-profile-service.service';

describe('GithubuserProfileServiceService', () => {
  let service: GithubuserProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubuserProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
