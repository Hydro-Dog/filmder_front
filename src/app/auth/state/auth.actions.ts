import { ID } from '@datorama/akita';
import { createAction, props } from '@datorama/akita-ng-effects';
import { User } from './auth.models';

export const login = createAction(
  '[Auth] Login',
  props<{ userName: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{
    user: User;
  }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{
    error: any;
  }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ user: User }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{
    res: { id: number };
  }>()
);

export const registerError = createAction(
  '[Auth] Register Error',
  props<{
    error: any;
  }>()
);