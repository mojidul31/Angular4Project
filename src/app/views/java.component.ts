import {Component} from '@angular/core';

@Component({
template:`<div style="width:350px;height:200px;background-color:orange;margin-left:40px;">
<h1>This is Java Page</h1>
<form class="myform" (ngSubmit)="onSubmit()">
<input type="text">
<button type="submit" class="btn btn-primary" >Submit</button>
</form>
</div>`
})
export class JavaComponent{
    // onSubmit() {
    //     if (this.myform.valid) {
    //       console.log("Form Submitted!");
    //     }
    //   }
}