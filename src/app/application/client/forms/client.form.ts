import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class ClientForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "companyName" : ["", [Validators.required, Validators.minLength(5)]],
            "address"  : "",
            "email" : ["", [Validators.required, Validators.email]],
            "phoneNumber" : "",
            "country" : "",
            "contactPerson" : this.fb.array([
                this.fb.group({
                    "name" : ["", Validators.required],
                    "responsible" : "",
                    "phoneNumber" : "",
                    "email" : ""
                })
            ])
        });
    }
}
