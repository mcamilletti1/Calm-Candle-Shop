import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
    
  user!:User;
  constructor( 
    private userService: UserService) {
        userService.userObservable.subscribe((newUser) => {
            this.user = newUser;
          })
     }

  ngOnInit(): void{
    this.user = this.userService.currentUser;
}

get isAuth(){
    return this.user.token;
  }

}