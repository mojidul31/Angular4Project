import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 /*template:`
 <p>Heroes:</p>
 <ul>
   <li *ngFor="let hero of heroes">
     {{ hero }}
   </li>
 </ul> 
<ul>
<li *ngFor="let  person of persons">
  <h3>Name :</h3>{{ person.name }}
  <h3>Email :</h3>{{ person.email }}
  <h3>Mobile :</h3>{{ person.mobile }}
</li>
</ul>`*/
//styles:['h1{color:green}','span{color:navy}']
})
export class AppComponent {
  public title = 'Development Bank Limited';
  public firstName = 'Mojidul';
  public lastName = 'Islam';
  //public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
//   public persons: any[]=[
//     {"name":"Mojidul","email":"mojidul@mislbd.com","mobile":"015590256095"},
//     {"name":"Nayeem","email":"nayeem@google.com","mobile":"01711000001"}
// ];    
}
