import { TestBed } from '@angular/core/testing';

import { AdminChildrenGuard } from './admin-children.guard';

describe('AdminChildrenGuard', () => {
  let guard: AdminChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
