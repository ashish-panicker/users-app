import { Component, Input } from '@angular/core';
import { User } from '../../model/user';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {

  @Input('users') users: User[] = []


}
