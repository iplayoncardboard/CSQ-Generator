import {CSQ,CSQList,DateTime} from '../models';

export class MockCSQList {
    newCSQList:CSQList = {
        title: 'NewList',
        xmlVersion: 1.0,
        encoding: 'ISO-8859-1',
        listOfCSQ: []
    }



   populatedCSQList: CSQList = {
    title: 'CSQHolidayList',
    xmlVersion: 1.0,
    encoding: 'ISO-8859-1',
    listOfCSQ: [
        {
            title: 'Acupuncture',
            notes: '',
            dateTimeList: [
                {
                    startTime: '05:15:00',
                    startDate: new Date(),
                    endTime: '12:00:00',
                    endDate: new Date()
                },
                {
                    startTime: '13:00:00',
                    startDate: new Date(),
                    endTime: '16:30:00',
                    endDate: new Date()
                },
                {
                    startTime: '12:00:00',
                    startDate: new Date(),
                    endTime: '12:00:00',
                    endDate: new Date()
                }
            ]
        },
        {
            title: 'CS_CAR_SEATS',
            notes: '',
            dateTimeList: [
                {
                    startTime: '05:15:00',
                    startDate: new Date(),
                    endTime: '06:30:00',
                    endDate: new Date()
                },{
                    startTime: '12:00:00',
                    startDate: new Date(),
                    endTime: '12:00:00',
                    endDate: new Date()
                }
            ]
        }
    ]
   };

   csqListWithOneEntry = {
    title: 'NewList',
    xmlVersion: 1.0,
    encoding: 'ISO-8859-1',
    listOfCSQ: [{
      title: 'Radiology',
      notes: 'Notes',
      dateTimeList: [] 
  }]
};

csqListWithOneEntryWithNewDateTime = {
    title: 'NewList',
    xmlVersion: 1.0,
    encoding: 'ISO-8859-1',
    listOfCSQ: [{
      title: 'Radiology',
      notes: 'Notes',
      dateTimeList: [{
        startTime: '12:00:00',
        startDate: new Date(),
        endTime: '12:00:00',
        endDate: new Date()
    }] 
  }]
}

populatedCSQListAfterRemove = {
    title: 'CSQHolidayList',
    xmlVersion: 1.0,
    encoding: 'ISO-8859-1',
    listOfCSQ: [
        {
            title: 'CS_CAR_SEATS',
            notes: '',
            dateTimeList: [
                {
                    startTime: '05:15:00',
                    startDate: new Date(),
                    endTime: '06:30:00',
                    endDate: new Date()
                },{
                    startTime: '12:00:00',
                    startDate: new Date(),
                    endTime: '12:00:00',
                    endDate: new Date()
                }
            ]
        }
    ]
   }

}