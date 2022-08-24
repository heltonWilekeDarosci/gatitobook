import { switchMap, Observable } from 'rxjs';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { animals } from './../animals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  animals$!: Observable<animals>;

  constructor(
    private UserService: UserService,
    private AnimalsService: AnimalsService
  ) { }

  ngOnInit(): void {
    this.animals$ = this.UserService.returnUser().pipe(
      switchMap((user) => {
        const userName = user?.name ?? '';
        return this.AnimalsService.userList(userName);
      })
    )
  }
}
