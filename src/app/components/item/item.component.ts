import { Component, OnInit, HostBinding, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ItemData } from '../../classes/Item-data-class';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  editMode: Boolean = false;
  isLastClicked: Boolean = false;
  constructor(private el: ElementRef) { }

  @Input() item: ItemData;
  @Output() editing: EventEmitter<ItemData>;

  @HostListener('dblclick') onDblClick() {
    this.editMode = true;
    this.editing.emit(this.item);
    // console.log(this.item);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.editMode = false;
      this.editing.emit(undefined);
      this.isLastClicked = false;
    } else {
      this.isLastClicked = true;
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 113) {
      if (this.isLastClicked) {
        if(this.editMode) {
          this.editMode = false;
          this.editing.emit(undefined);
        } else {
          this.editMode = true;
          this.editing.emit(this.item);
        }
      }
    }
  }

  setSelected() {
    this.isLastClicked = true;
  }

  ngOnInit() {
  }

}
