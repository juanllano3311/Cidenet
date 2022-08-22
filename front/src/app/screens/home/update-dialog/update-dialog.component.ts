import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  id: any = this.dataModal.data;
  maxDate: any;
  minDate: any
  idEmail: number = 0;
  firstLastname: any;
  firstName: any;
  areas: any[] = [
    {value: 'Administración', viewValue: 'Administración'},
    {value: 'Financiera', viewValue: 'Financiera'},
    {value: 'Compras', viewValue: 'Compras'},
    {value: 'Infraestructura', viewValue: 'Infraestructura'},
    {value: 'Operación', viewValue: 'Operación'},
    {value: 'Talento Humano', viewValue: 'Talento Humano'},
    {value: 'Servicio Varios', viewValue: 'Servicios Varios'}
  ];
  countries: any[] = [
    {value: 'Colombia', viewValue: 'Colombia'},
    {value: 'Estados Unidos', viewValue: 'Estados Unidos'},
  ];
  typeId: any[] = [
    {value: 'Cedula Ciudadania', viewValue: 'Cedula Ciudadania'},
    {value: 'Cedula Extranjera', viewValue: 'Cedula Extranjera'},
    {value: 'Pasaporte', viewValue: 'Pasaporte'},
    {value: 'Permiso Especial', viewValue: 'Permiso Especial'},
  ];
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataModal: any,
    private dialogRef: MatDialogRef<UpdateDialogComponent>,
    private fb: FormBuilder,
    private service: UsersService,
    public router: Router,
  ) {
    this.form = fb.group({
   
      id: ['', [Validators.required]],
      firstLastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[A-Z]{1,20}')]],
      secondtLastName:['', [Validators.required, Validators.maxLength(20), Validators.pattern('[A-Z]{1,20}')]],
      firstName:['', [Validators.required, Validators.maxLength(20), Validators.pattern('[A-Z]{1,20}')]],
      othersNames:['', [Validators.maxLength(50), Validators.pattern('[A-Z]{1,50}')]],
      country:['', Validators.required],
      typeId:['', Validators.required],
      idNumber:['',[ Validators.required]],
      email:['',[ Validators.required, Validators.email]],
      area:['', Validators.required],
      admissionDate:['',  [Validators.required]],
      registrationDate:[''],
      status:[true, Validators.required]
    });
   }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(){
    this.service.getMember(this.id).subscribe(data => {
      this.form.patchValue(data);
    })
  }

  onSave(){
    console.log("registrationDate",this.form.get('registrationDate')?.value)
    console.log("admissionDate",this.form.get('admissionDate')?.value)
    console.log(this.form.value)
    console.log('----------')
    console.log(this.form.value)
    this.service.updateMember(this.id,this.form.value).subscribe(data => {
         window.alert("Actualizado correctamente!");
         this.close();
    });
  }

  close() {
    this.dialogRef.close()
  }


  generate(){    
    if(this.form.get('firstLastName')?.value == '' || this.form.get('firstName')?.value == '' || this.form.get('country')?.value == ''){
      window.alert("Debe digitar el primer apellino, primer nombre y el país!");
      return
    }
    let lasName = this.form.get('firstLastName')?.value.toLowerCase().replace(/\s+/g, '');
    let Name = this.form.get('firstName')?.value.toLowerCase().replace(/\s+/g, '');
    if(this.form.get('country')?.value == 'Colombia'){
      this.form.get('email')?.setValue(`${Name}.${lasName}@cidenet.com.co`)
    }else {
      this.form.get('email')?.setValue(`${Name}.${lasName}@cidenet.com.us`)
    }
  }

  validate(){
    this.service.validateEmail(this.form.get('email')?.value).subscribe(data => {
      console.log(data)
      
      if (data == null) {
        window.alert("Correo valido!");
      }else{
        let lasName = this.form.get('firstLastName')?.value.toLowerCase().replace(/\s+/g, '');
        let Name = this.form.get('firstName')?.value.toLowerCase().replace(/\s+/g, '');
        this.idEmail ++
        this.form.get('email')?.setValue(`${Name}.${lasName}.${this.idEmail}@cidenet.com.co`)
        window.alert("Ya existe el correo, valide de nuevo!");
      }
        
    });
  
  }

}
