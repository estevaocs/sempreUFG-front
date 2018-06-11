import { SEMPRE_UFG_API } from './sempreufg.api';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(`${SEMPRE_UFG_API}/api/auth`, User);
  }

  findAll(page: number, count: number) {
    return this.http.get(`${SEMPRE_UFG_API}/api/user/${page}/${count}`);
  }

  findById(id: number) {
    return this.http.get(`${SEMPRE_UFG_API}/api/user/${id}`);
  }

  delet(id: number){
    return this.http.get(`${SEMPRE_UFG_API}/api/user/${id}`);
  }
}
