import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [HomeComponent, UpdateDialogComponent, DeleteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
