import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import{ Department } from '../model/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  departments: Department[];
  errorMessage: String;
  department = new Department('Ksc3','KSC');
  public message: string = 'Save Successfully!';
  public msg: number;
  public departmentList: any; 
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(res => this.departmentList = res.json());
  }
  public saveCustomer(){
  alert("test");
  this.departmentService.saveCustomer(this.department).subscribe(res=>this.message = res);
  console.log(this.message);
 }
  onSubmit = function (departmentFormValue) {
    console.log(departmentFormValue);
    //let body = JSON.stringify(departmentFormValue);
    let department1 = new Department(departmentFormValue.deptCode,departmentFormValue.deptName);
    //this.departmentService.saveCustomer(department1).subscribe(res=>this.message = res);
    this.departmentService.saveDepartment(department1).subscribe(res=>this.msg = res);
    console.log(this.msg);
    //location.reload();
    // var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
    // this.http.post("http://www.testtttt.com", body).subscribe((data) => {});

  }
}
