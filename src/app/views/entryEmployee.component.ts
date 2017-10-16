import {Component} from '@angular/core';

@Component({
template:`<div style="width:auto;height:auto;margin-left:40px;width:450px">
<h1>Employee Entry UI</h1>
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
<label for="emp.mobile">Mobile :</label>
<input type="text" class="form-control" id="emp.mobile" required="required">
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
<input type="password" class="form-control" id="emp.pwd" required="required">
</div>
<div class="checkbox">
<label><input type="checkbox"> Remember me</label>
</div>
<button type="submit" (click)="addNewRow()" class="btn btn-primary">Submit</button>
</form>
</div>
<hr/>
<h3>Employee Details</h3>
<table class="table table-striped">
<thead>
<tr class="success">
<th>Name</th>
<th>Email</th>
<th>Address</th>
<th>Mobile</th>
<th>Date of Birth</th>
</tr>
</thead>
<tbody>
<tr *ngFor='let person of persons'>
<td>{{person.name}}</td>
<td>{{person.email}}</td>
<td>{{person.address}}</td>
<td>{{person.mobile}}</td>
<td>{{person.dateofbirth}}</td>
</tr>
</tbody>
<thead>
<tr class="success">
<th>Name</th>
<th>Email</th>
<th>Address</th>
<th>Mobile</th>
<th>Date of Birth</th>
</tr>
</thead>
</table>`
})
export class EntryEmployeeComponent{
    public persons: any[]=[
        {"name":"Mojidul","email":"mojidul@mislbd.com","address":"Kurigram","mobile":"015590256095","dateofbirth":"21/01/1981"},
        {"name":"Nayeem","email":"nayeem@google.com","address":"Kurigram","mobile":"01711000001","dateofbirth":"21/01/1981"},
        {"name":"Azad","email":"azad@mislbd.com","address":"Dhaka","mobile":"01559874874","dateofbirth":"21/01/1981"}
    ];
    //pubic person[]=[

    //];
}