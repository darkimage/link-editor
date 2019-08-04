import { ElectronService } from './../../providers/electron.service';
import { FileProcessorService } from './../../services/file-processor.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ItemCategory } from '../../classes/item-category-class';

export type ExpansionState = 'collapsed' | 'expanded';
export type DescriptionState = 'hide' | 'show';

@Component({
  selector: 'panel-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild('toolbar', {static: true}) toolbar: ElementRef;
  expansionAll: ExpansionState = 'collapsed';
  descriptionAll: DescriptionState = 'hide';
  @Output() expansion: EventEmitter<ExpansionState> =  new EventEmitter<ExpansionState>();
  @Output() descriptions: EventEmitter<DescriptionState> =  new EventEmitter<DescriptionState>();
  constructor(
    private render: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.render.addClass(this.toolbar.nativeElement, 'mat-elevation-z4');
  }

  toggleExpansion() {
    if (this.expansionAll === 'collapsed') {
      this.expansionAll = 'expanded';
    } else {
      this.expansionAll = 'collapsed';
    }
    this.expansion.emit(this.expansionAll);
  }

  toggleDescriptions() {
    if (this.descriptionAll === 'hide') {
      this.descriptionAll = 'show';
    } else {
      this.descriptionAll = 'hide';
    }
    this.descriptions.emit(this.descriptionAll);
  }
}
