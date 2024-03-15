import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';

import { ClientGuard } from './client.guard'; 

describe('ClientGuard', () => {
  let guard: CanActivate; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientGuard); 
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  
});
