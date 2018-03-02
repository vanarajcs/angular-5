import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layouts-default-header',
  templateUrl: 'layouts-default-header.component.html',
})
export class LayoutsDefaultHeaderComponent implements OnInit {
     public isCollapsed = true;
     constructor() {  }

     ngOnInit() {}

     toggleMenu() {
   this.isCollapsed = !this.isCollapsed;
 }
}
