import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutDefaultComponent } from "./layout-default.component";

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      NgbModule.forRoot()
  ],
  declarations: [
      LayoutDefaultComponent
  ],
  providers: [],
  exports : [
      LayoutDefaultComponent,
  ]
})
export class LayoutDefaultModule { }
