import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logError(message: string, stack: string){

    console.warn(`Logging Service: ${message} \n ${stack}`);
    
  }

}
