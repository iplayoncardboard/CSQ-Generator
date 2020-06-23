import {CSQ,CSQList,DateTime} from '../models';

export class MockCSQ {

    newCSQ: CSQ = {
        title: '',
        notes: '',
        dateTimeList: []
    };

    populatedCSQ:CSQ =  {
        title: 'Radiology',
        notes: 'Notes',
        dateTimeList: [] 
    };

    populatedCSQWithDT:CSQ =  {
        title: 'Radiology',
        notes: 'Notes',
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