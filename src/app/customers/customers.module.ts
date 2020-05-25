import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { APIKEY } from '../value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{provide:APIKEY,useValue:{
    apikey:'98765432',
    modulename:'Customers'
  }}]
})
export class CustomersModule { }
