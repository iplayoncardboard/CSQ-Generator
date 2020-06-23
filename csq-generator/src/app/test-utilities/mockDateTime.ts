import {CSQ,CSQList,DateTime} from '../models';

export class MockDateTime {

        newDateTime: DateTime = {
            startTime: '12:00:00',
            startDate: new Date(),
            endTime: '12:00:00',
            endDate: new Date()
        };
          updatedDateTime: DateTime = {
            startTime: '06:00:00',
            startDate: new Date(),
            endTime: '13:00:00',
            endDate: new Date()
        }
    
}