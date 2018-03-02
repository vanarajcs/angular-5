import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-required',
  templateUrl: 'error.required.html',
})
export class ErrorRequired implements OnInit {
    @Input('controls') controls: string;

    constructor() {  }

    ngOnInit() {}
}
