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
}
