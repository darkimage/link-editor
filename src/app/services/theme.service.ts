import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark: Boolean = false;
  darkTheme: BehaviorSubject<Boolean> =  new BehaviorSubject<Boolean>(false);
  constructor() { }

  switchTheme() {
    if (this._isDark) {
      this._isDark = false;
      this.darkTheme.next(false);
    } else {
      this._isDark = true;
      this.darkTheme.next(true);
    }
  }
}
