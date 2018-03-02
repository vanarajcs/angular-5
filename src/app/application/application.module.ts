import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';

@NgModule({
  imports : [
      DashboardModule,
      UserModule,
      ClientModule
  ]
})
export class ApplicationModule { }
