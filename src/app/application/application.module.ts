import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports : [
      RouterModule,
      DashboardModule,
      UserModule
  ]
})
export class ApplicationModule { }
