import { TestBed, async } from '@angular/core/testing';

import { MasterListService } from './master-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CSQList, CSQ, DateTime } from '../models';

describe('MasterListServiceService', () => {
  let service: MasterListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    service = TestBed.inject(MasterListService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
