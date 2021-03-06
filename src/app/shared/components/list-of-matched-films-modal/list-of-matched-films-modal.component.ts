import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Film } from '@src/app/data-layer/film/film.models';
import { MatchSession } from '@src/app/data-layer/match-session/match-session.models';
import { Observable } from 'rxjs';

export interface ListOfMatchedFilmsModalData {
  matchSession$: Observable<MatchSession>;
}

@Component({
  selector: 'filmder-matched-films-summary',
  templateUrl: 'list-of-matched-films-modal.component.html',
  styleUrls: ['list-of-matched-films-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchedFilmsSummaryModalShared {
  @Input() matchedMovies: Film[];
  @Input() closeButton = false;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
}
