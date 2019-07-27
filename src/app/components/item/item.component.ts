import { Component, OnInit, HostBinding, HostListener, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { ItemData } from '../../classes/Item-data-class';
import { itemEditEvent } from './item.interfaces';

export type editTrigger = 'dbclick' | 'key';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  editMode: Boolean = false;
  isSelected: Boolean = false;
  constructor(
    public el: ElementRef,
    private render: Renderer2) { }

  @Input() item: ItemData;
  @Output() editing: EventEmitter<itemEditEvent> = new EventEmitter<itemEditEvent>();
  @Output() selected: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();

  @HostListener('dblclick') onDblClick() {
    this.editMode = true;
    this.editing.emit({component: this, action: 'dbclick'});
    this.unselect();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.editMode = false;
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
        } else {
          this.editMode = true;
          this.editing.emit({component: this, action: 'key'});
          this.unselect();
        }
      }else if(this.editMode) {
        this.editMode = false;
      }
    }
  }

  unselect() {
    this.render.removeClass(this.el.nativeElement, 'selected');
    this.isSelected = false;
    // console.log(this.el.nativeElement)
  }

  select(data?: ItemData) {
    const select = () => {
      this.render.addClass(this.el.nativeElement, 'selected');
      this.isSelected = true;
      this.selected.emit(this);
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
