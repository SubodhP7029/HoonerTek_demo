import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUsers(){
    const path = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(path);
  }
}
