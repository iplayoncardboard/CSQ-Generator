import {CSQ,CSQList,DateTime} from '../models';

export class MockModels {
    newCSQList:CSQList = {
        title: 'NewList',
        xmlVersion: 1.0,
        encoding: 'ISO-8859-1',
        listOfCSQ: []
    }
    newCSQ: CSQ = {
        title: '',
        notes: '',
        dateTimeList: []
    }

    newDateTime: DateTime = {
        startTime: '12:00:00',
        startDate: new Date(),
        endTime: '12:00:00',
        endDate: new Date()
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
   }

   populatedCSQ:CSQ =  {
    title: 'Radiology',
    notes: '',
    dateTimeList: [
        {
            startTime: '05:00:00',
            startDate: new Date(),
            endTime: '06:30:00',
            endDate: new Date()
        },{
            startTime: '13:15:00',
            startDate: new Date(),
            endTime: '22:45:00',
            endDate: new Date()
        }
    ]
}
}