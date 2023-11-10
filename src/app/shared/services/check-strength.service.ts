import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckStrengthService {

  constructor() { }
  checkStrength(p: string) {
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const length = p.length < 9 && p.length > 0 ? false : true;
    const letters = /[a-z,A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);
    const markers = [letters, numbers, symbols]
    let force = 0;
    for (const marker of markers) {
      force += marker ? 1 : 0;
    }
    if (length) {
      return this.getColors(force)
    }
    else {
      return this.getColors(-1);
    }
  }

  getColors(f: number) {
    let color, index;
    switch (f) {
      case -1:
        color = "red";
        index = 2;
        break
      case 0:
        color = "gray";
        index = 2;
        break;
      case 1:
        color = "red";
        index = 0;
        break;
      case 2:
        color = "yellow"
        index = 1;
        break;
      case 3:
        color = "green"
        index = 2;
        break;
    }
    return { col: color, ind: index }
  }
}
