import { Component, OnInit, Input } from '@angular/core';
import { CheckStrengthService } from 'src/app/shared/services/check-strength.service';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent implements OnInit {
  @Input() passwordValue!: string;
  constructor(
    public checkStrength: CheckStrengthService
  ) { }
  bars = [
    {color:"grey"},
    {color:"grey"},
    {color:"grey"}
  ]
  bar0: string = "grey";
  bar1: string = "grey";
  bar2: string = "grey";
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.setColor(this.checkStrength.checkStrength(this.passwordValue))
  }
  setColor({ col, ind }: any) {
    for (let i = 0; i <= ind; i++) {
      this.bars[i].color = col
    }
    if (ind < 2) {
      col = "grey"
      for (let i = ind + 1; i <= 2; i++) {
        this.bars[i].color = col
      }
    }
  }
}
