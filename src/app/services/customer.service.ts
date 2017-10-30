import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Customer } from '../model/customer';

@Injectable()

export class CustomerService {

    constructor(private _http: Http) {}
    
        public getCustomers(){
            let _url: string = 'http://172.16.215.44:8078/uni-man-sys/customers';
            //alert("test");
            return this._http.get(_url);
        }

        public saveCustomer(cust:Customer): Observable<string>{        
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let _url: string = 'http://172.16.215.44:8078/uni-man-sys/departments';
            return this._http.post(_url, cust, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
        }
        public saveDepartment(cust:Customer): Observable<number>{        
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let _url: string = 'http://172.16.215.44:8078/uni-man-sys/departments';
            return this._http.post(_url, cust, options)
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