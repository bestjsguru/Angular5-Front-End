import { TestBed, inject } from '@angular/core/testing';

import { HttpIntercepterService } from './http-intercepter.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { NotificationsService } from 'angular2-notifications';

describe('HttpIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpIntercepterService, NotificationsService],
      imports: [ RouterModule.forRoot([]), SharedModule ]
    });
  });

  it('should be created', inject([HttpIntercepterService], (service: HttpIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
