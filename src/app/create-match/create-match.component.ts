import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  templateUrl: 'create-match.component.html',
  styleUrls: ['create-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMatchComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit(): void {}

  navigateBack() {
    this.navController.navigateBack('/tabs/tab2');
  }
}
