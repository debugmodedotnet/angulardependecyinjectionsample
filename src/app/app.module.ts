import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { Child3Component } from './child3/child3.component';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';
import { APIKEY } from './value';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './feature/feature.module';

var configvalue = 9;

// var getLogObject = ()=>{
//   if(configvalue ==9){
//     return new LogService();
//   }
//   else{
//     return new UpdatedlogService();
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    AppRoutingModule
  ],
  providers: [
            {provide:UpdatedlogService,useClass:UpdatedlogService},
            {provide:ErrorHandler,useClass:ErrorHandler},
          {provide:APIKEY,useValue:{
            apikey:'123456',
            modulename:'app'
          }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
