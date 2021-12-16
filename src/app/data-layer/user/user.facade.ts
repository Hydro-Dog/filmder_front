import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  getCurrentUser,
  getUser,
  resetStore,
  setCurrentMatchSessionSuccess,
  updateUser,
} from './user.actions';
import { UserEffects } from './user.effects';
import { UserEntity } from './user.models';
// import { User } from './user.models';
import { UserQuery } from './user.query';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  readonly selectUser$: Observable<UserEntity> = this.userQuery.selectUser$;
  readonly selectError$: Observable<any> = this.userQuery.selectError$;

  constructor(
    private userQuery: UserQuery,
    private userService: UserService,
    private userEffects: UserEffects,
    private actions: Actions
  ) {}

  getUser(query: Partial<UserEntity>) {
    return this.userService.getUser(query);
  }

  getCurrentUser() {
    console.log('getCurrentUser');
    this.actions.dispatch(getCurrentUser());

    return this.userEffects.getCurrentUser$;
  }

  // resetStore() {
  //   this.actions.dispatch(resetStore());
  // }

  // getUser(userId: ID) {
  //   this.actions.dispatch(getUser({ userId }));

  //   return this.userEffects.getUserSuccess$;
  // }

  // updateUser(user: Partial<User>) {
  //   this.actions.dispatch(updateUser({ user }));
  // }

  //  getUser(value: string) {
  //   return this.userService.checkUserNameIsTaken(value);
  // }

  // checkEmailIsTaken(value: string) {
  //   return this.userService.checkEmailIsTaken(value);
  // }

  // getByUsername(value: string) {
  //   return this.userService.getByUsername(value).pipe(
  //     map((val) => {
  //       return val.user;
  //     })
  //   );
  // }

  // checkUserNameIsTaken(value: string) {
  //   return this.userService.checkUserNameIsTaken(value);
  // }

  // setCurrentMatchSessionSuccess(id: string) {
  //   this.actions.dispatch(setCurrentMatchSessionSuccess({ id }));

  //   return of(true).pipe(delay(500));
  // }
}
