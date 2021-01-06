import { TestBed } from '@angular/core/testing';

import { AuthentificationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
