import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: any,
    private dialogRef: MatDialogRef<DeleteComponent>,
    private service: UsersService
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close()
  }

  confirm() {
    this.service.deleteMember(this.dataModal.data).subscribe(dta => {
      window.alert('Eliminado correctamente!');
      this.dialogRef.close()
    })
  }

}
