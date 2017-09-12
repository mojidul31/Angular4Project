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
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>`
})
export class EntryEmployeeComponent{}