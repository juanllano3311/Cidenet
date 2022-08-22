import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemeberInterface } from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient)  { }

  allMembers(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.member}`);
  }

  getMember(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${environment.member}/${id}`);
  }

   validateEmail(email:string): Observable<any[]>{
    return this.http.get<any[]>(`${environment.member}/email/${email}`);
  }

  addMember(member: MemeberInterface): Observable<MemeberInterface>{
    const headers =  { 'content-type': 'application/json'};
      return this.http.post<MemeberInterface>(`${environment.member}`, member,{'headers': headers});
  }

  updateMember(id:number, member: MemeberInterface): Observable<MemeberInterface>{
    const headers =  { 'content-type': 'application/json'};
      return this.http.put<MemeberInterface>(`${environment.member}/${id}`, member,{'headers': headers});
  }

  deleteMember(id: number): Observable<any[]>{
    return this.http.delete<any[]>(`${environment.member}/${id}`);
  }
}
