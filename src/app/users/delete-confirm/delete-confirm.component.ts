import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-delete-confirm',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-4xl ms-5">
      {{id}} | {{action}}
    </h1>
  `,
  styles: ``
})
export class ConfirmActionComponent {

  id: number
  action: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {

    this.id = this.route.snapshot.paramMap.get('id') as unknown as number
    this.action = this.route.snapshot.paramMap.get('action') as string
  }



}
