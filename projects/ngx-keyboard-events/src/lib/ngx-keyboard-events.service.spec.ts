import { TestBed } from '@angular/core/testing';

import { NgxKeyboardEventsService } from './ngx-keyboard-events.service';

describe('NgxKeyboardEventsService', () => {
  let service: NgxKeyboardEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKeyboardEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
