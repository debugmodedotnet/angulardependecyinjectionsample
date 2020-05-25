import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message:string;
  apikey: any; 
  constructor(private logservice: LogService) {
    

   }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Customer");
    this.apikey= this.logservice.getApiKey();
    console.log(this.apikey);
  }

}
