import { TestBed, async } from '@angular/core/testing';

import { MasterListService } from './master-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CSQList, CSQ, DateTime } from '../models';
import { MockCSQList, MockCSQ, MockDateTime } from '../test-utilities/'

describe('MasterListServiceService', () => {
  let service: MasterListService;
  let mockCSQList;
  let mockCSQ;
  let mockDateTime;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    service = TestBed.inject(MasterListService);
  }));

  beforeEach(() => {
    mockCSQList = new MockCSQList();
    mockCSQ = new MockCSQ();
    mockDateTime = new MockDateTime();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new master list when createNewList() is called',() => {
    expect(service.createNewList()).toEqual(mockCSQList.newCSQList);
  })

  it('should add a new list header when addNewListHeader() is called',() => {
    let tempCSQList = service.addNewListHeader(mockCSQList.newCSQList, 'Radiology', 'Notes')
    expect(tempCSQList.listOfCSQ[0]).toEqual(mockCSQ.populatedCSQ);
  });

  it('should remove a list header when removeListHeader() is called',()=>{
    expect(service.removeListHeader(mockCSQList.populatedCSQList,0))
    .toEqual(mockCSQList.populatedCSQListAfterRemove)
  });

  it('should add a new date time when newDateTime() is called',()=>{
    let tempCSQList = service.newDateTime(mockCSQList.csqListWithOneEntry,0, mockDateTime.newDateTime)
    expect(tempCSQList).toEqual(mockCSQList.csqListWithOneEntryWithNewDateTime)
  });

  it('should remove a date time form dateTimeList when removeDateTime() is called', () =>{
    let tempCSQList = service.removeDateTime(mockCSQList.csqListWithOneEntryWithNewDateTime, 0,0)
    expect(tempCSQList).toEqual(mockCSQList.csqListWithOneEntry);
  })

  it('should change value of a date time in dateTimeList when updateDateTime() is called', () => {
    let tempCSQList = service.updateDateTime(mockCSQList.csqListWithOneEntryWithNewDateTime, 0, 0, mockDateTime.updatedDateTime)
    expect(tempCSQList).toEqual(mockCSQList.csqListWithOneEntryWithUpdatedDateTime);
  })

  it('should copy the value of the last DateTime object in the array when CopyDateTime is called',() => {
    let tempCSQList = service.CopyDateTime(mockCSQList.csqListWithOneEntryWithNewDateTime,0)
    expect(tempCSQList.listOfCSQ[0].dateTimeList.length).toEqual(2);
    expect(tempCSQList.listOfCSQ[0].dateTimeList[1]).toEqual(mockDateTime.newDateTime);
  })
});
