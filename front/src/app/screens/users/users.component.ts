import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
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
    public router: Router,
    private fb: FormBuilder,
    private service: UsersService
  ) { 
    this.form = fb.group({
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
    this.idEmail = 0;
    this.dates();
  }

  dates(){
    this.maxDate = new Date
    this.minDate = new Date;
    this.minDate.setMonth(this.minDate.getMonth()-3)
  }

  out(){
    this.router.navigate(['login']);
  }

  onSave(){
    this.form.get('registrationDate')?.setValue(new Date().toISOString())
    console.log(this.form.value)
    this.service.addMember(this.form.value).subscribe(data => {
         window.alert("Agregado correctamente!");
         this.router.navigate(['home']);
    });

 
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
