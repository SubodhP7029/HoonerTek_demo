import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object :any= [];
  name = '';
  constructor(private userService : UsersService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.object = data;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log((filterValue));
    
    this.object.filter = filterValue.trim().toLowerCase();
  }
}
