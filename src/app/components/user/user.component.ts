import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Gender, User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'lab-js-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user$: Observable<User>;
  public lastName:string;
  public firstName:string;
  public id:number;
  public gender:Gender;
  public constructor(
    private readonly userService:UserService
  ) { }

  public ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser$();
    this.user$.subscribe({
      next:(user)=>{
        console.log(user)
        this.lastName=user.lastName;
        this.firstName=user.firstName;
        this.id=user.id;
        this.gender=user.gender;
      }
    })
  }
}
