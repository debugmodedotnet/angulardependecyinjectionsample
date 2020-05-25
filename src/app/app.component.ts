import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diinangular';
  url = undefined;
  data: string;  
  senddata(){
    this.data = this.url.indexOf();
  }
}
