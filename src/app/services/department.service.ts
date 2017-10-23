import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Department } from '../model/department';

@Injectable()

export class DepartmentService {

    constructor(private _http: Http) {}
    
        public getDepartments(){
            let _url: string = 'http://172.16.215.57:8078/uni-man-sys/departments';
            //alert("test");
            return this._http.get(_url);
        }

        public saveCustomer(dept:Department): Observable<string>{        
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let _url: string = 'http://localhost:8078/uni-man-sys/departments';
            return this._http.post(_url, dept, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
        }
        public saveDepartment(dept:Department): Observable<number>{        
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