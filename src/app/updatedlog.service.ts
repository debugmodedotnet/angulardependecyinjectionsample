import { Injectable } from '@angular/core';

@Injectable()
export class UpdatedlogService {

  private static count = 0; 
  constructor() { 
    UpdatedlogService.count = UpdatedlogService.count + 1;
    console.log(UpdatedlogService.count);

  }
  sayHello(name:string){
    // new version API 
    return "hello updated"+name; 
  }

  sayNotHello(){
    return "hello not hello";
  }
}
