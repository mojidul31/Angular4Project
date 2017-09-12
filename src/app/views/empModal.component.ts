import {Component} from '@angular/core';

@Component({
template:`<div class="row" style="width:auto;height:auto;margin-left:40px;width:450px">
<button (click)="myModal.open()" style="border-radius: 10px"><h4 style="color:green">Add Employee</h4></button>
<modal #myModal>
    <modal-header>
    <div style="background-color:#42dcf4">
        <h1 >Employee Entry</h1>
    </div>
    </modal-header>
    <modal-content>
    <form class="form-vertical" role="form">
    <div class="form-group">
    <label for="emp.name">Name :</label>
    <input type="text" class="form-control" id="emp.name" required="required" >
    </div>
    <div class="form-group">
    <label for="emp.email">Email :</label>
    <input type="email" class="form-control" id="emp.email" required="required">
    </div>
    <div class="form-group">
    <label for="emp.address">Address :</label>
    <input type="text" class="form-control" id="emp.address" required="required">
    </div>
    <div class="form-group">
    <label for="emp.dateofbirth">Date of Birth :</label>
    <input type="date" class="form-control" id="emp.dateofbirth" required="required">
    </div>
    <div class="form-group">
    <label for="emp.userid">User Id:</label>
    <input type="text" class="form-control" id="emp.userid" required="required">
    </div>
    <div class="form-group">
    <label for="emp.pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" required="required">
    </div>
    <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
    </div>
   </form>
    </modal-content>
    <modal-footer>
    <div style="background-color:#b8d2d6">
    <button class="btn btn-primary btn-md" (click)="saveEmployee()">Save</button>
    <button class="btn btn-danger btn-md" (click)="myModal.close()">close</button>
    </div>
    </modal-footer>
</modal>
</div>`
})
export class EmpModalComponent{}