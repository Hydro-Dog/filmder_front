import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  getUser,
  resetStore,
  setCurrentMatchSessionSuccess,
  updateUser,
} from './user.actions';
import { UserEffects } from './user.effects';
import { User } from './user.models';
import { UserQuery } from './user.query';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  readonly selectUser$: Observable<User> = this.userQuery.selectUser$;
  readonly selectError$: Observable<any> = this.userQuery.selectError$;

  constructor(
    private userQuery: UserQuery,
    private userService: UserService,
    private userEffects: UserEffects,
    private actions: Actions
  ) {}

  resetStore() {
    this.actions.dispatch(resetStore());
  }

  getUser(userId: ID) {
    this.actions.dispatch(getUser({ userId }));

    return this.userEffects.getUserSuccess$;
  }

  updateUser(user: Partial<User>) {
    this.actions.dispatch(updateUser({ user }));
  }

  checkEmailIsTaken(value: string) {
    return this.userService.checkEmailIsTaken(value);
  }

  getByUsername(value: string) {
    console.log('getByUsername: ', value);
    return this.userService.getByUsername(value).pipe(
      map((val) => {
        console.log('val: ', val, val.user);
        return val.user;
      })
    );
  }

  checkUserNameIsTaken(value: string) {
    return this.userService.checkUserNameIsTaken(value);
  }

  checkPhoneNumberIsTaken(value: string) {
    return this.userService.checkPhoneNumberIsTaken(value);
  }

  setCurrentMatchSessionSuccess(id: string) {
    this.actions.dispatch(setCurrentMatchSessionSuccess({ id }));

    return of(true).pipe(delay(500));
  }
}
