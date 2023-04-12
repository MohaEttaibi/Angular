import { ErrorHandler } from '@angular/core';
import { AlertPromise } from 'selenium-webdriver';

//Task 1 - Create ErrorHandler Class
export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected error occurred.');
    console.log('Error: ', error);

    //Log Error on Server...
  }
}
