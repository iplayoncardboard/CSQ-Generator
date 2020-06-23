import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from './error.service'
import { NotificationService } from './notification.service'
import { LoggingService } from  './logging.service'
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{

  constructor(private injector: Injector) { }

  handleError(error){

    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message;
    let stack;

    message = errorService.getClientMessage(error);
    stack = errorService.getClientStack(error);
    logger.logError(message, stack);


  }

}
