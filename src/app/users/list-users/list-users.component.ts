import { Component } from '@angular/core';
import { ShowUserComponent } from '../show-user/show-user.component';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [ShowUserComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

  users:User[]

  constructor(private userService: UserService){
    this.users = userService.getAllUsers()
  }
}
