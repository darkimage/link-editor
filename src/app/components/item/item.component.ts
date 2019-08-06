import { Component, OnInit, HostBinding, HostListener, ElementRef, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { ItemData } from '../../classes/item-data-class';
import { itemEditEvent } from './item.interfaces';
import { trigger, transition, style, animate } from '@angular/animations';
import { ElectronService } from '../../providers/electron.service';
import { ItemEditorComponent } from '../item-editor/item-editor.component';

export type EditTrigger = 'dbclick' | 'key' | 'focus';

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
    private render: Renderer2,
    private electron: ElectronService) { }

  @Input() item: ItemData;
  @Output() editing: EventEmitter<itemEditEvent> = new EventEmitter<itemEditEvent>();
  @Output() editingEnd: EventEmitter<itemEditEvent> = new EventEmitter<itemEditEvent>();
  @Output() selected: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();
  @Output() deleteItem: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>();
  @ViewChild('editor', {static: false}) editor: ItemEditorComponent;

  @HostListener('dblclick') onDblClick() {
    this.enterEditMode('dbclick');
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target) && !this.editMode) {
      this.unselect();
    } else if (!this.el.nativeElement.contains(event.target) && this.editMode && this.canClose) {
      this.exitEditMode('focus');
    } else if (this.el.nativeElement.contains(event.target) && !this.editMode) {
      this.select();
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 113) {
      if (this.isSelected) {
        this.enterEditMode('key');
      } else if (this.editMode && this.canClose) {
        this.exitEditMode('key');
      }
    } else if (event.keyCode === 13 && this.editMode && this.canClose){
      this.exitEditMode('key');
    } else if (event.keyCode === 46 && !this.editMode && this.isSelected) {
      this.deleteItem.emit(this);
    }
  }

  unselect() {
    this.render.removeClass(this.el.nativeElement, 'selected');
    this.isSelected = false;
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
  }

  exitEditMode(action: EditTrigger) {
    this.editor.Update();
    this.render.removeClass(this.el.nativeElement, 'item-editor');
    this.editMode = false;
    this.render.removeStyle(this.el.nativeElement, 'cursor');
    this.editingEnd.emit({component: this, action: action});
    this.unselect();
  }

  enterEditMode(action: EditTrigger) {
    this.render.addClass(this.el.nativeElement, 'item-editor');
    this.editMode = true;
    this.render.setStyle(this.el.nativeElement, 'cursor', 'auto');
    this.editing.emit({component: this, action: action});
    this.unselect();
  }

  linkclick(ev) {
    ev.preventDefault();
    if (ev.ctrlKey || ev.metaKey) {
      // console.log(ev.target)
     window.open(ev.target.href, '_blank');
    }
  }

  linkHover(ev: MouseEvent) {
    // console.log(ev);s
    if (ev.metaKey || ev.ctrlKey) {
      this.render.setStyle(ev.target, 'cursor', 'pointer');
    } else {
      this.render.setStyle(ev.target, 'cursor', 'default');
    }
  }

  linkHoverLeave(ev: MouseEvent){
    this.render.removeStyle(ev.target, 'cursor');
  }

  ngOnInit() {
  }

}
