import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsDefaultContentComponent } from './content/layouts-default-content.component';
import { LayoutsDefaultHeaderComponent } from './header/layouts-default-header.component';
import { LayoutsDefaultFooterComponent } from './footer/layouts-default-footer.component';
import { LayoutDefaultComponent } from "./layout-default.component";

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      NgbModule.forRoot()
  ],
  declarations: [
      LayoutsDefaultContentComponent,
      LayoutsDefaultHeaderComponent,
      LayoutsDefaultFooterComponent,
      LayoutDefaultComponent
  ],
  providers: [],
  exports : [
      LayoutDefaultComponent,
      LayoutsDefaultContentComponent,
      LayoutsDefaultHeaderComponent,
      LayoutsDefaultFooterComponent
  ]
})
export class LayoutDefaultModule { }
