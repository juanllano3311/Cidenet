import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { DeleteComponent } from './delete/delete.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  firstLastNameFilter = '';
  secondtLastNameFilter = '';
  firstNameFilter = '';
  othersNamesFilter = '';
  countryFilter = '';
  typeIdFilter = '';
  idNumberFilter = '';
  emailFilter = '';
  page: number = 1;
  members: any[] = [];
  displayedColumns: string[] = ['firstname', 'secondNmae'];
  constructor(
    public router: Router,
    private service: UsersService,
    public dialog: MatDialog
  ) { 
    
  }

  async ngOnInit() {
    await this.getMembers();
  }

  async getMembers(){
    await this.service.allMembers().subscribe(data => {
      this.members = data;
    });

  }

  out() {
    this.router.navigate(['login']);
  }

  editMember(data: any){
     this.dialog.open(UpdateDialogComponent, {
        width: '80%',
        height: '90%',
        data: {
          data
       },
      }).afterClosed().subscribe(data =>{
        window.location.reload();
      });
  }

  deleteMember(data: any){
    this.dialog.open(DeleteComponent, {
      width: '40%',
      height: '25%',
      data: {
         data
      },
    }).afterClosed().subscribe(data =>{
      window.location.reload();
    });
  }

}
