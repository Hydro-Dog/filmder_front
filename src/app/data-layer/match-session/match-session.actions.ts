import { createAction, props } from '@datorama/akita-ng-effects';
import {
  MatchSession,
  MatchSessionChangesEvents,
  MatchSessionCO,
} from './match-session.models';

export const setCurrentMatchSessionSuccess = createAction(
  '[Match Session] Set Current Match Session Success',
  props<{
    matchSession: MatchSession;
  }>()
);

export const createMatchSession = createAction(
  '[Match Session] Create',
  props<{ matchSession: MatchSessionCO }>()
);

export const createMatchSessionSuccess = createAction(
  '[Match Session] Create Success',
  props<{
    matchSession: MatchSession;
  }>()
);

export const createMatchSessionError = createAction(
  '[Match Session] Create Error',
  props<{
    error: any;
  }>()
);

export const deleteMatchSession = createAction(
  '[Match Session] Delete',
  props<{ matchSessionId: number }>()
);

export const deleteMatchSessionSuccess = createAction(
  '[Match Session] Delete Success',
  props<{
    matchSessionId: number;
  }>()
);

export const deleteMatchSessionError = createAction(
  '[Match Session] Delete Error',
  props<{
    error: any;
  }>()
);

export const updateMatchSession = createAction(
  '[Match Session] Update',
  props<{ matchSession: MatchSession }>()
);

export const updateMatchSessionSuccess = createAction(
  '[Match Session] Update Success',
  props<{
    matchSession: MatchSession;
  }>()
);

export const updateMatchSessionError = createAction(
  '[Match Session] Update Error',
  props<{
    error: any;
  }>()
);

export const getCurrentMatchSession = createAction(
  '[Match Session] Get Current Match Session',
  props<{ matchSessionId: string }>()
);

export const getCurrentMatchSessionSuccess = createAction(
  '[Match Session] Get Current Match Session Success',
  props<{
    currentMatchSession: MatchSession;
  }>()
);

export const getCurrentMatchSessionError = createAction(
  '[Match Session] Get Current Match Session Error',
  props<{
    error: any;
  }>()
);

export const getMatchSessionsByUserId = createAction(
  '[Match Session] Get By User Id',
  props<{ userId: number }>()
);

export const getMatchSessionsByUserIdSuccess = createAction(
  '[Match Session] Get By User Id Success',
  props<{
    matchSessions: MatchSession[];
  }>()
);

export const getMatchSessionsByUserIdError = createAction(
  '[Match Session] Get By User Id Error',
  props<{
    error: any;
  }>()
);

export const searchMatchSessionsInvitedSuccess = createAction(
  '[Match Session] Search Invited Success',
  props<{
    matchSessions: MatchSession[];
  }>()
);

export const swipe = createAction(
  '[Match Session] Swipe',
  props<{
    matchSessionId: number;
    filmJSON: string;
    swipeDirection: 'left' | 'right';
  }>()
);

export const swipeSuccess = createAction(
  '[Match Session] Swipe Success',
  props<{
    currentMatchSession: MatchSession;
  }>()
);

export const resetStore = createAction('[Match Session] Reset Store');

// sockets---------------------------------------------------

export const socketAddMatchSessionSuccess = createAction(
  '[Match Session] Socket Add Match Session Success',
  props<{
    matchSession: MatchSession;
  }>()
);

export const socketChangeMatchSessionSuccess = createAction(
  '[Match Session] Socket Changes Match Session Success',
  props<{
    matchSession: MatchSession;
  }>()
);

export const socketFilmsMatchSuccess = createAction(
  '[Match Session] Socket Films Match Success',
  props<{
    filmJSON: string;
  }>()
);
