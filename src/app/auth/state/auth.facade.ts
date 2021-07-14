import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable } from 'rxjs';
import { register } from './auth.actions';
import { User } from './auth.models';
import { AuthQuery } from './auth.query';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  selectIsLogin$: Observable<string>;
  selectUserName$: Observable<string>;
  selectId$: Observable<string>;
  selectError$: Observable<any>;

  constructor(
    private authQuery: AuthQuery,
    private authService: AuthService,
    private actions: Actions
  ) {
    this.selectIsLogin$ = this.authQuery.selectIsLogin$;
    this.selectUserName$ = this.authQuery.selectUserName$;
    this.selectId$ = this.authQuery.selectUserName$;
    this.selectError$ = this.authQuery.selectError$;
  }

  login(userName: string, password: string) {
    return this.authService.login(userName, password);
  }

  register(user: User) {
    this.actions.dispatch(register({ user }));
  }

  checkEmailIsTaken(value: string) {
    return this.authService.checkEmailIsTaken(value);
  }
  checkUserNameIsTaken(value: string) {
    return this.authService.checkUserNameIsTaken(value);
  }
}