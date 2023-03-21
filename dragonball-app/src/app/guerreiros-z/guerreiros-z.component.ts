import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../services/api/dragon-ball.service';

@Component({
  selector: 'app-guerreiros-z',
  templateUrl: './guerreiros-z.component.html',
  styleUrls: ['./guerreiros-z.component.scss']
})
export class GuerreirosZComponent implements OnInit {
  personagens!: any[];

  constructor(private dragonBallService: DragonBallService) {}

  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens(): void {
    this.dragonBallService.getPersonagens()
      .subscribe(data => {
        this.personagens = data.personagens;
      });
  }
}
