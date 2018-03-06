import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './client.component';
import { ClientService } from './services/client.service';
import { AppCommonModule } from '../../common/common.module';

const clientRoutes : Routes = [
    {
        path: 'client',
        component: ClientComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(clientRoutes),
        ReactiveFormsModule,
        AppCommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ClientComponent
    ],
    providers : [
        ClientService
    ]
})
export class ClientModule { }
