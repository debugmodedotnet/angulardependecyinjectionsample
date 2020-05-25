import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { APIKEY } from '../value';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  apikey:any;
  message:string; 
  constructor(private logservice: LogService, @Inject(APIKEY) a) {
    this.apikey = a; 
    console.log(this.apikey);

  }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Child 2");
  }


}
