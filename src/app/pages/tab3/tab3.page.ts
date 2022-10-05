import { Component, OnInit } from '@angular/core';
import { PlayerStat } from 'src/app/interfaces/PlayerStat.interface';
import { Prediction } from 'src/app/interfaces/Prediction.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  predictions: Prediction[] = [
    {
      idPlayer: 1,
      idMatch: 1,
      winner: 'local',
      homeGoals: 1,
      awayGoals: 0,
    },
    {
      idPlayer: 2,
      idMatch: 1,
      winner: 'away',
      homeGoals: 2,
      awayGoals: 3,
    },
    {
      idPlayer: 2,
      idMatch: 2,
      winner: 'home',
      homeGoals: 4,
      awayGoals: 2,
    },
  ];

  playerStats: PlayerStat[] = [
    {
      idPlayer: 1,
      points: 10,
      correct: 5,
      correctWithGoals: 1,
      playerOfTheMatch: 1,
    },
    {
      idPlayer: 2,
      points: 15,
      correct: 7,
      correctWithGoals: 2,
      playerOfTheMatch: 2,
    },
    {
      idPlayer: 3,
      points: 6,
      correct: 2,
      correctWithGoals: 1,
      playerOfTheMatch: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('predictions', this.predictions);
  }

  //   <ion-item *ngFor="let prediction of predictions" type="item-text-wrap">
  //   <div class="row">
  //     <ion-col> {{prediction.idPlayer}} </ion-col>
  //     <ion-col> {{prediction.idMatch}} </ion-col>
  //     <!-- <div class="col col-20">{{prediction.idPlayer}}</div>
  //     <div class="col col-80">{{prediction.idMatch}}</div> -->
  //   </div>
  // </ion-item>
}
