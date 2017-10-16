import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeService {
    public employeeRecord = [
        {name: 'Mojidul', city: 'Kurigram', age: 35, id: 'e1'},
        {name: 'Nayeem', city: 'Kurigram', age: 5, id: 'e2'},
        {name: 'Sarmin', city: 'Kurigram', age: 28, id: 'e3'}
    ];
    public getEmployee(id: string): any {
        let employee: any;
       for (let i = 0; i < this.employeeRecord.length ; i++) {
           if (id === this.employeeRecord[i].id) {
               employee = this.employeeRecord[i];
               break;
           }
       }
       return employee;
    }
}