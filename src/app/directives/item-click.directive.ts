import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Directive, ElementRef, Renderer2,HostListener, EventEmitter, Output } from '@angular/core';
import { ItemCategory } from '../classes/item-category-class';
import { ItemData } from '../classes/item-data-class';

@Directive({
  selector: '[itemSelect]'
})
export class ItemClickDirective {
  @Output() selected: EventEmitter<ItemData> = new EventEmitter<ItemData>();
  isSelected: Boolean = false;

  constructor(
    private el: ElementRef,
    private item: CdkDrag<ItemData>,
    private render: Renderer2) {
  }

  @HostListener('document:click', ['$event']) clickout(event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.select();
    } else {
      this.unselect();
    }
  }

  isDirectiveItem(item: CdkDrag<ItemData>): Boolean{
    console.log(this.item.data === item.data);
    return this.item.data === item.data;
  }

  unselect() {
    this.render.removeClass(this.el.nativeElement, 'selected');
    this.isSelected = false;
    this.selected.emit(undefined);
  }

  select() {
      this.render.addClass(this.el.nativeElement, 'selected');
      this.isSelected = true;
      this.selected.emit(this.item.data);
  }

}
