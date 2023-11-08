import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  value: string = "";
  lengthEr: boolean = false;
  bar0: string = "grey";
  bar1: string = "grey";
  bar2: string = "grey";
  ngOnInit(): void {
  }

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
      return force
    }
    else {
      return -1;
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

  setColor({ col, ind }: any) {
    for (let i = 0; i <= ind; i++) {
      let index = "bar" + i
      this[index as keyof typeof this] = col
    }
    if (ind < 2) {
      col = "grey"
      for (let i = ind + 1; i <= 2; i++) {
        let index = "bar" + i
        this[index as keyof typeof this] = col
      }
    }
  }
  
  handleChange() {
    this.setColor(this.getColors(this.checkStrength(this.value)))
  }
}
