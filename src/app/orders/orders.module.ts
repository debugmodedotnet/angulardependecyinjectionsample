import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { APIKEY } from '../value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{provide:APIKEY,useValue:{
    apikey:'99999',
    modulename:'Order'
  }}]
})
export class OrdersModule { }
