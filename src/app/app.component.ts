import { Component , OnInit} from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { HttpGetService } from './services/http.get.service';
import { HttpPostService } from './services/http.post.service';
import{ Department } from './model/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [EmployeeService,, HttpPostService, private httpPostService: HttpPostService]
  providers: [HttpGetService, HttpPostService]
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
export class AppComponent implements OnInit{
  departments: Department[];
  errorMessage: String;
  department = new Department('Ksc2','KSC'); 
  //Department{JSON.stringify({deptCode:'cse01',deptName:'CSE'})};  
  public title = 'Development Bank Limited';
  public firstName = 'Mojidul';
  public lastName = 'Islam';
  //public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
//   public persons: any[]=[
//     {"name":"Mojidul","email":"mojidul@mislbd.com","mobile":"015590256095"},
//     {"name":"Nayeem","email":"nayeem@google.com","mobile":"01711000001"}
// ];
public message: string = 'Save Successfully!';
public cusName: string; 
public employeeObj: any;
public customerObj: any;
public customerList: any;

// public employees : [{
//   name: string,
//   city : string,
//   age : number,
//   id : string
// }];
public showMessage: string;
public empId: string;
public custom: any;


// constructor(private employeeService: EmployeeService) {}
// public getEmployeeDetails(): void {
//       this.employeeObj = this.employeeService.getEmployee(this.empId);
//       // alert(this.employeeObj.name);
//       // alert(this.employeeObj.city);
//       // alert(this.employeeObj.age);
// }
constructor(private httpGetService: HttpGetService, private httpPostService: HttpPostService){

}
public getCustomer() {
  //alert("testing");
  this.httpGetService.getCustomers().subscribe(res => this.customerObj = res.json()[0]);  
 }
 
 public saveCustomer(){
   //alert("test");
 this.httpPostService.saveCustomer(this.department).subscribe(res=>this.message = res);
 console.log(this.message);
}
ngOnInit(){  
  this.httpGetService.getCustomers().subscribe(res => this.customerList = res.json());
  
}
}
