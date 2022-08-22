import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FirstLastNamePipe } from '../pipes/first-last-name.pipe';
import { SecondtLastNamePipe } from '../pipes/secondt-last-name.pipe';
import { FirstNamePipe } from '../pipes/first-name.pipe';
import { OthersNamesPipe } from '../pipes/others-names.pipe';
import { CountryPipe } from '../pipes/country.pipe';
import { TypeIdPipe } from '../pipes/type-id.pipe';
import { IdNumberPipe } from '../pipes/id-number.pipe';
import { EmailPipe } from '../pipes/email.pipe';

@NgModule({
  declarations: [
    FirstLastNamePipe,
    SecondtLastNamePipe,
    FirstNamePipe,
    OthersNamesPipe,
    CountryPipe,
    TypeIdPipe,
    IdNumberPipe,
    EmailPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxPaginationModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxPaginationModule,
    MatDialogModule,
    HttpClientModule,
    FirstLastNamePipe,
    SecondtLastNamePipe,
    FirstNamePipe,
    OthersNamesPipe,
    CountryPipe,
    TypeIdPipe,
    IdNumberPipe,
    EmailPipe
  ]
  
})
export class SharedModule { }
