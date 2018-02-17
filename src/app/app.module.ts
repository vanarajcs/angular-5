import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from "./common/common.module";
import { ApplicationModule } from "./application/application.module";
import { LayoutModule } from './layouts/layout.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from "./application/dashboard/admin-dashboard/admin-dashboard.component";
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
// routes
const appRoutes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    ApplicationModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
