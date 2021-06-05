import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-woloxers',
  templateUrl: './woloxers.component.html',
  styleUrls: ['./woloxers.component.scss']
})
export class WoloxersComponent implements OnInit {
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
