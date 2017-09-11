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
  //public heroImageUrl='D:\QA ALL\Images\1.jpg';
}
/* export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'courses',
      component: CoursesComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
]; */
