import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports : [
      DashboardModule,
      UserModule,
      ClientModule
  ],
  declarations: [PaymentComponent]
})
export class ApplicationModule { }
