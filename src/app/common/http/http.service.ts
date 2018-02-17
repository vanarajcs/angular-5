import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    // Http headers
    private httpHeader : HttpHeaders
    //  Initiate the object
    constructor(private http: HttpClient) {
        let httpHeader = new HttpHeaders();
        httpHeader = httpHeader.set("Api-Key", "api-key-value");
        httpHeader = httpHeader.set("Authorization", "authorization");
        this.httpHeader = httpHeader;
    }

    /** Get data to server
        @return Observables
    **/
    get(url) {
        return this.http.get(url, { headers : this.httpHeader });
    }

    /** Post data to server
        @return Observables
    **/
    post(url, data) {
        return this.http.post(url, data, { headers : this.httpHeader });
    }
}
