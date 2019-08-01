import { Component, OnInit, HostBinding, HostListener, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { ItemData } from '../../classes/item-data-class';
import { itemEditEvent } from './item.interfaces';
import { trigger, transition, style, animate } from '@angular/animations';

export type editTrigger = 'dbclick' | 'key' | 'focus';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',[
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('500ms ease-in', style({ height: '100%', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ opacity: 1 }), 
            animate('500ms ease-out', style({height: '0', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ItemComponent implements OnInit {
  editMode: Boolean = false;
  isSelected: Boolean = false;
  showDescription: Boolean = false;
  canClose: Boolean = true;
  constructor(
    public el: ElementRef,
    private render: Renderer2) { }

  @Input() item: ItemData;
  @Output() editing: EventEmitter<itemEditEvent> = new EventEmitter<itemEditEvent>();
  @Output() editingEnd: EventEmitter<itemEditEvent> = new EventEmitter<itemEditEvent>();
  @Output() selected: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();

  @HostListener('dblclick') onDblClick() {
    this.editMode = true;
    this.render.setStyle(this.el.nativeElement, 'cursor', 'auto');
    this.editing.emit({component: this, action: 'dbclick'});
    this.unselect();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target) && this.canClose) {
      this.editMode = false;
      this.render.removeStyle(this.el.nativeElement, 'cursor');
      this.editingEnd.emit({component: this, action: 'focus'});
      this.unselect();
    } else {
      if(!this.editMode){
        this.select();
      }
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 113) {
      if (this.isSelected) {
        // if(this.editMode && this.canClose) {
        //   this.editMode = false;
        // } else {
          this.editMode = true;
          this.render.setStyle(this.el.nativeElement, 'cursor', 'auto');
          this.editing.emit({component: this, action: 'key'});
          this.unselect();
        // }
      } else if(this.editMode && this.canClose) {
        this.editMode = false;
        this.render.removeStyle(this.el.nativeElement, 'cursor');
        this.editingEnd.emit({component: this, action: 'key'});
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

  preventClose(value: Boolean) {
    this.canClose = value;
    console.log(this.canClose);
  }

  ngOnInit() {
  }

}
