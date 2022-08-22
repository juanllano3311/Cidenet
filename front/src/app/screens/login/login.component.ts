import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  allAdmins: any;
  form: FormGroup;
  prueba: any = 'hola'
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    public router: Router) {

    this.form = fb.group({
      _id: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }
  async getadmins() {
    await this.service.getadmin(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(data => {
      this.allAdmins = data
      if (this.allAdmins == null) {
        window.alert("No se encuentra al usuario!");
      }else{
        this.router.navigate(['home']);
      }
    });

  }

}
