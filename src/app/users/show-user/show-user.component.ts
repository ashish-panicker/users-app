import { Component, Input } from '@angular/core';
import { User } from '../../model/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {

  @Input('users') users: User[] = []


}
