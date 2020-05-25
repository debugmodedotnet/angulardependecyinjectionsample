import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message:string;
  apikey: any; 
  constructor(private logservice: LogService) {
    

   }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Orders");
    this.apikey= this.logservice.getApiKey();
    console.log(this.apikey);
  }

}
