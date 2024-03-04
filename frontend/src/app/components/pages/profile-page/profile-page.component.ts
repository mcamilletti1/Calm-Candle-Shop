import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
    
  user!:User;
  constructor( 
    private userService: UserService, private http: HttpClient) {
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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
        this.uploadFile(file);
    }
 }

 uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('profilePic', file);

    this.http.post(`${environment.apiUrl}/upload-profile-pic`, formData).subscribe({
        next: (response: any) => {
            this.user.profilePic = response.profilePic;

            this.userService.updateUserObservable(this.user);
        },
        error: (err) => console.error(err)
    })
 }



}