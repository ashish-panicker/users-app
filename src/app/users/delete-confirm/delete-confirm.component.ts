import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../model/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-delete-confirm',
  standalone: true,
  imports: [NgIf],
  templateUrl: './delete-confirm.component.html',
  styles: ``
})
export class ConfirmActionComponent {

  id: number
  action: string
  user: User | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {

    this.id = this.route.snapshot.paramMap.get('id') as unknown as number
    this.action = this.route.snapshot.paramMap.get('action') as string
    this.user = this.service.getUserByUserId(this.id)
  }

  proceedToAction() {
    if(!this.user){
      this.router.navigateByUrl('/users/list-all')
    }
    this.service.deleteUserById(this.id)
    this.router.navigateByUrl('/users/list-all')
  }

}
