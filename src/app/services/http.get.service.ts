import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class HttpGetService {
    public customer: any;
    constructor(private _http: Http) {}

    public getCustomers(){
        let _url: string = 'http://172.16.215.57:8078/uni-man-sys/customers';
        //alert("test");
        return this._http.get(_url);
        //this.customer = this._http.get(_url);
        //console.log(this.customer);
        //return this.customer;
    }

    // public getDepartmentByName(deptName: string){
    //     let _url: string = 'urllocation' + deptName + 'any';
    //     return this._http.get(_url);
    // }
}
