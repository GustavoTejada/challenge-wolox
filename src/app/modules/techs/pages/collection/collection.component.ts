import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Tech } from 'src/app/core/interfaces/Tech.interface';
import { TechsService } from 'src/app/core/services/techs.service';
import { LocalStorageService } from '../../../../core/services/local-storage-service.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  techs: Tech[] = [];
  orderedTechs: Tech[] = [];
  faHeart = faHeart;
  search: string = '';
  direction: string = 'none';
  favs: any = JSON.parse(<string>localStorage.getItem('favs'));
  
  constructor(
    private _techService: TechsService,
    private cd: ChangeDetectorRef,
    private _localStorageService: LocalStorageService
  ) {
    this.getTechsCollection();
  }

  ngOnInit(): void {
  }

  applyFilter() {
    this.orderedTechs = this.techs.filter(e => e.type.toLowerCase().includes(this.search.toLowerCase()) || e.tech.toLowerCase().includes(this.search.toLowerCase()));
    this.cd.detectChanges();
  }

  orderBy(techs: Tech[], direction = '') {
    if (direction === "asc") {
      return techs.sort((a, b) => (a.tech > b.tech ? 1 : -1));
    } else if (direction === "desc") {
      return techs.sort((a, b) => (a.tech > b.tech ? -1 : 1));
    } else {
      return techs;
    }
  }
//te amo//

  orderByName() {
    if (this.direction === "none") {
      this.direction = 'asc';
    } else if (this.direction === "asc") {
      this.direction = 'desc';
    } else if (this.direction === "desc") {
      this.direction = 'asc';
    }
    this.orderedTechs = this.orderBy(this.orderedTechs, this.direction);
  }

  getTechsCollection() {
    this._techService.getTechsColection().subscribe(
      response => {
        this.techs = response;
        this.orderedTechs = this.techs;
        this.setFavs();
      }, error => {
        console.error(error);
      }
    )
  }

  setFavs() {
    for (const tech of this.orderedTechs) {
      let favsArray: string[] = this.favs;
     if (favsArray.find(element => element === tech.tech)) {
       tech.fav = true;
     }
    }
  }

  changeState(i: number) {
    this.orderedTechs[i].fav = !this.orderedTechs[i].fav;
    let favsArray: string[] = this.favs;
    let element: number = favsArray.findIndex( e => e === this.orderedTechs[i].tech);
    if (element == -1) {
      favsArray.push(this.orderedTechs[i].tech);
    } else {
      favsArray.splice(element, 1);
    }
    // this._localStorageService.removeItem('favs');
    this._localStorageService.setItem('favs', favsArray);
    this.favs = favsArray;
    this.cd.detectChanges();
  }
}
