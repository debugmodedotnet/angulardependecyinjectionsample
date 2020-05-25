import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { APIKEY } from '../value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
})
export class Child1Component implements OnInit {

  message:string;
  apikey: any; 
  constructor(private logservice: LogService) {
    

   }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Child 1");
    this.apikey= this.logservice.getApiKey();
    console.log(this.apikey);
  }

}
