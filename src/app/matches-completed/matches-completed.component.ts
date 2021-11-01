import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { MatchSessionFacade } from '../data-layer/match-session/match-session.facade';
import { MatchSession } from '../data-layer/match-session/match-session.models';
import { StorageFacade, STORAGE_ITEMS } from '../services/storage.service';
import { MatchSessionsListTypes } from '../shared/components/matches-list/matches-list.component';

@Component({
  templateUrl: 'matches-completed.component.html',
})
export class MatchesCompletedComponent {
  readonly matchSessionsListTypes = MatchSessionsListTypes;
  readonly selectCompletedMatchSessions$ =
    this.matchSessionFacade.selectCompletedMatchSessions$;

  readonly destroy$ = new Subject();

  constructor(
    private matchSessionFacade: MatchSessionFacade,
    private storageFacade: StorageFacade,
    private navController: NavController
  ) {}

  async ngOnInit() {
    const id = await this.storageFacade.getItem(STORAGE_ITEMS.USER_ID);
    this.matchSessionFacade.getMatchSessionsByUserId(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  navigateBack() {
    this.navController.navigateBack('/tabs/tab1');
  }

  matchRemoved(matchSession: MatchSession) {}
}