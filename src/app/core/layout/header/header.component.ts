import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage-service.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favs: any = localStorage.getItem('favs');
  favsArray: any;
  faHeart = faHeart;

  constructor(
    private _localStorageService: LocalStorageService 
  ) {
  }

  ngOnInit(): void {
    this._localStorageService.getItem('favs').subscribe(
      response => {
        this.favsArray = response;
      }
    )
  }

}
