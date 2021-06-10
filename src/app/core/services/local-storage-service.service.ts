import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type serializable = object | Object;
interface ICache { [ key: string ]: BehaviorSubject<any>; }


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private cache: ICache;

  constructor() {
    this.cache = Object.create(null);
  }

  getItem<T extends serializable>(key: string): BehaviorSubject<T> {
    if (this.cache[key])
      return this.cache[key];
    else
      return this.cache[key] = new BehaviorSubject(JSON.parse(localStorage.getItem(key) || '[]'));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    if (this.cache[key])
      this.cache[key].next(undefined);
  }

  setItem<T extends serializable>(key: string, value: T): BehaviorSubject<T> {
    localStorage.setItem(key, JSON.stringify(value));

    if (this.cache[key]) {
      this.cache[key].next(value);
      return this.cache[key];
    }

    return this.cache[key] = new BehaviorSubject(value);
  }
}
