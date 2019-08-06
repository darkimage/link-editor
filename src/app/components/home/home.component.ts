import { LayoutStyle } from './../editor/editor.component';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  layout: LayoutStyle = LayoutStyle.columnLeftRight;
  constructor(
    public themeService: ThemeService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.themeService.darkTheme.subscribe(isDark => {
      if (isDark) {
        this.renderer.addClass(document.body, 'theme-dark');
      } else {
        this.renderer.removeClass(document.body, 'theme-dark');
      }
    });
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

  cicleTheme() {
    this.themeService.switchTheme();
  }

}
