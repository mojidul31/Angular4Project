import {Injectable} from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { Department } from '../model/department';
//import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export class HttpPostService{    

   

    constructor(private _http: Http){}

    // public saveCustomer(){
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     let _url: string = 'http://172.16.215.44:8078/uni-man-sys/departments';
    //     //this.loading = true;
    //     return this._http.post(_url,JSON.stringify({deptCode:'cse01',deptName:'CSE'})).subscribe(res => {
    //         console.log(res);
    //       },
    //       err => {
    //         console.log("Error occured");
    //       });
        //.subscribe((res: Response) => {this.data = res.json();
        //this.loading = false;
    //};
    public saveCustomer(dept:Department): Observable<string>{        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _url: string = 'http://localhost:8078/uni-man-sys/departments';
        return this._http.post(_url, dept, options)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
        let body = res.json();
            return body.data || {};
        }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
        }
    }

