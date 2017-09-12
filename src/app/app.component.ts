import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
/* template:`<h1>{{title}}</h1>
<span>Hello {{firstName}} {{lastName}}</span>`,
styles:['h1{color:green}','span{color:navy}'] */
})
export class AppComponent {
  public title = 'Development Bank Limited';
  public firstName = 'Mojidul';
  public lastName = 'Islam';  
}
