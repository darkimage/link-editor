import { LayoutStyle } from './../editor/editor.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  layout: LayoutStyle = LayoutStyle.columnLeftRight;
  constructor() { }

  ngOnInit() {
  }

  cicleLayout() {
    switch (this.layout) {
      case LayoutStyle.columnLeft:
        this.layout = LayoutStyle.columnRight;
        break;
      case LayoutStyle.columnRight:
          this.layout = LayoutStyle.columnLeftRight;
          break;
      default:
          this.layout = LayoutStyle.columnLeft;
          break;
    }
  }

}
