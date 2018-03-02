import { Injectable } from '@angular/core';
import { HttpService } from "../../../common/http/http.service";

@Injectable()
export class ClientService {

    private url : String = "data/client.json";

    constructor(private httpService : HttpService) {
    }

    insert(data : JSON) {
        return this.httpService.post(this.url, data);
    }

    findAll() {
        return this.httpService.get(this.url);
    }

    findById(id : Number) {
        return this.httpService.get(this.url + "?" + id);
    }
}
