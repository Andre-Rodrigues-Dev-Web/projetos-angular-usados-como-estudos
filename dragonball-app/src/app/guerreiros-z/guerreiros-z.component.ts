import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../services/api/dragon-ball.service';

@Component({
  selector: 'app-guerreiros-z',
  templateUrl: './guerreiros-z.component.html',
  styleUrls: ['./guerreiros-z.component.scss']
})
export class GuerreirosZComponent implements OnInit {
  animes: any;

  constructor(private DragonBallService: DragonBallService) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes() {
    this.DragonBallService.getAnimes()
      .subscribe(
        data => {
          this.animes = data;
        },
        error => {
          console.log(error);
        }
      );
  }
}
