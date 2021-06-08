import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  userExist = false;
  faBars = faBars;
  showMenu = false;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.userExist = true;
    }
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
