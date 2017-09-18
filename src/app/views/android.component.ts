import {Component} from '@angular/core';

@Component({
template:`<div style="width:350px;height:200px;background-color:gray;margin-left:40px;"><h1>This is Android Page</h1>
<hr/>
<table>
<tr *ngFor="let person of persons">
<td>{{person.name}}</td>
<td>{{person.email}}</td>
<td>{{person.mobile}}</td>
</tr>
</table>
</div>`
})
export class AndroidComponent{    
}