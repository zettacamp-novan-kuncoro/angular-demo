import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreateComponent } from './user-create/user-create.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'

import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core';
import { NormalizeStringPipe } from '../pipes/normalize-string.pipe';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  providers: [
    NormalizeStringPipe,
  ]
})
export class UserManagementModule { }
