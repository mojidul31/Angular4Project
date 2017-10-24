import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import{ Customer } from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  custoemers: Customer[];
  errorMessage: String;
  customer = new Customer('Munshi','Father','Mother','01745747474');
  public message: string = 'Save Successfully!';
  public msg: number;
  public customerList: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => this.customerList = res.json());
  }
  public saveCustomer(){
    alert("test");
    this.customerService.saveCustomer(this.customer).subscribe(res=>this.message = res);
    console.log(this.message);
   }
    onSubmit = function (customerFormValue) {
      console.log(customerFormValue);
      //let body = JSON.stringify(departmentFormValue);
      let customer1 = new Customer(customerFormValue.name,customerFormValue.fname,customerFormValue.mname,customerFormValue.phone);
      //this.departmentService.saveCustomer(department1).subscribe(res=>this.message = res);
      this.customerService.saveDepartment(customer1).subscribe(res=>this.msg = res);
      console.log(this.msg);
      //location.reload();
      // var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
      // this.http.post("http://www.testtttt.com", body).subscribe((data) => {});
  
    }

}
