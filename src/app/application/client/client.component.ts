import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ClientService } from "./services/client.service"
import { ClientForm } from './forms/client.form';

@Component({
    templateUrl: 'client.component.html',
})
export class ClientComponent implements OnInit {
    clientForm : FormGroup;

    constructor(private clientService : ClientService) {
        let clientForm = new ClientForm();
        this.clientForm = clientForm.getForm();
    }

    ngOnInit() {

    }

    clientAdd() {
        this.clientService.insert(this.clientForm.value).subscribe(
            data => {
            }
        );
    }
}
