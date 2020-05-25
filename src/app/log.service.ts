import { Injectable, Inject } from '@angular/core';
import { APIKEY } from './value';

@Injectable({
  providedIn:'any'
})
export class LogService {

  private static count = 0; 
  constructor(@Inject(APIKEY) private apikey) { 
    LogService.count = LogService.count + 1;
    console.log(LogService.count);
  }

  sayHello(name:string){
    return "hello"+name; 
  }

  getApiKey(){
    return this.apikey;
  }
 
}
