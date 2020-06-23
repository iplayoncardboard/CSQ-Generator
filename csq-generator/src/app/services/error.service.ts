import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    getClientMessage(error: Error){
      return error.message? error.message : error.toString();
    }

    getClientStack(error: Error): string {
      return error.stack;
  }

}
