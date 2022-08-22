import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AmindInterface } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hhtp: HttpClient)  { }

   getadmin(email:string, passwor:string): Observable<AmindInterface[]>{
    return this.hhtp.get<AmindInterface[]>(`${environment.admin}/${email}/${passwor}`)
  }
}
