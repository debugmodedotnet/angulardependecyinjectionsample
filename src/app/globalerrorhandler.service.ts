import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalerrorhandlerService implements ErrorHandler {

  constructor() { }
  handleError(error){

    console.log("there is no error in app");

    // server 
    //
  }
}
