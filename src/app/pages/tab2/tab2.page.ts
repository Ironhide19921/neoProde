import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Match } from 'src/app/interfaces/Match.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  // partidosRonda1: string[]=[];
  // partidosRonda1: Observable<Match>;
  homeGoals: number = 0;
  awayGoals: number = 0;
  homePenalties: number = 0;
  awayPenalties: number = 0;
  submited: boolean = false;
  chkChecked: boolean = false;
  partidosRonda1: Match[] = [];
  // form: FormGroup;

  constructor(
    private dataService: DataService // private formBuilder: FormBuilder
  ) {}
  segmentChanged($event) {
    console.log($event.detail.value);

    this.dataService.getPartidosRonda($event.detail.value).subscribe(
      (partidos) => {
        console.log('this.partidosRonda1', partidos);
        this.partidosRonda1 = partidos;
        // console.log('this.partidosRonda1',this.partidosRonda1);

        console.log(this.partidosRonda1[0].teams.home.logo);
      },
      (err) => console.log('err:', err)
    );
  }

  getColor(partido: Match, side: string) {
    if (!partido.teams.home.winner && !partido.teams.away.winner) {
      return 'dark';
    }
    if (side === 'home') {
      return partido.teams.home.winner ? 'primary' : 'danger';
    }
    if (side === 'away') {
      return partido.teams.away.winner ? 'primary' : 'danger';
    }
  }

  ngOnInit() {
    console.log('arranco oninit');
    // this.partidosRonda1 = this.dataService.getPartidosRonda1();
    this.dataService.getPartidosRonda1().subscribe((partidos) => {
      console.log('this.partidosRonda1', partidos);
      this.partidosRonda1 = partidos;
      // console.log('this.partidosRonda1',this.partidosRonda1);

      console.log(this.partidosRonda1[0].teams.home.logo);
    });
  }

  onSubmit(formulario: NgForm) {
    if (this.homeGoals && this.awayGoals && formulario.submitted) {
      console.log('formulario', formulario);
    }

    // console.log('formulario.submitted', formulario.submitted);
    // console.log('formulario.valid', formulario.valid);
    // this.nullGoals();
  }

  nullGoals(algo: any, formulario: NgForm) {
    this.homeGoals = formulario.form.value.homeGoals;
    this.awayGoals = formulario.form.value.awayGoals;
    console.log('algo', algo);
    console.log('this.homeGoals', this.homeGoals);
    console.log('this.awayGoals', this.awayGoals);
  }

  nullPenalties(algo: any, formulario: NgForm) {
    this.homePenalties = formulario.form.value.homePenalties;
    this.awayPenalties = formulario.form.value.awayPenalties;
    console.log('algo', algo);
    console.log('this.homePenalties', this.homePenalties);
    console.log('this.awayPenalties', this.awayPenalties);
  }

  radio(event: any) {
    this.chkChecked = !this.chkChecked;
    console.log('event', event);
  }
}
