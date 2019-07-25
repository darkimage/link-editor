import { Component, OnInit, HostBinding, HostListener, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { ItemData } from '../../classes/Item-data-class';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  editMode: Boolean = false;
  isSelected: Boolean = false;
  constructor(
    private el: ElementRef,
    private render: Renderer2) { }

  @Input() item: ItemData;
  @Output() editing: EventEmitter<ItemData> = new EventEmitter<ItemData>();
  @Output() selected: EventEmitter<ItemData> = new EventEmitter<ItemData>();

  @HostListener('dblclick') onDblClick() {
    this.editMode = true;
    this.editing.emit(this.item);
    // console.log(this.item);
    this.unselect();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.editMode = false;
      this.editing.emit(undefined);
      this.unselect();
    } else {
      this.select();
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 113) {
      if (this.isSelected) {
        if(this.editMode) {
          this.editMode = false;
          this.editing.emit(undefined);
        } else {
          this.editMode = true;
          this.editing.emit(this.item);
          this.unselect();
        }
      }
    }
  }

  unselect() {
    this.render.removeClass(this.el.nativeElement, 'selected');
    this.isSelected = false;
    this.selected.emit(undefined);
    // console.log(this.el.nativeElement)
  }

  select(data?: ItemData) {
    const select = () => {
      this.render.addClass(this.el.nativeElement, 'selected');
      this.isSelected = true;
      this.selected.emit(this.item);
    };
    if (data === undefined) {
      select();
    } else if (data === this.item) {
      select();
    }
  }

  ngOnInit() {
  }

}
