import { ItemComponent } from './../item/item.component';
import { ItemCategory } from './../../classes/item-category-class';
import { Component, OnInit, Renderer2, QueryList, ViewChildren} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragStart} from '@angular/cdk/drag-drop';
import { ItemData } from '../../classes/Item-data-class';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  lastItemSelected: ItemData = undefined;
  listIds = [];
  categories: Array<ItemCategory> = new Array<ItemCategory>();
  @ViewChildren(ItemComponent) itemComponents: QueryList<ItemComponent>;

  constructor(private renderer: Renderer2) {
    for (let i = 0; i < 5; i++) {
      const cat = new ItemCategory('prova' + i);
      this.categories.push(cat);
      for (let j = 0; j < 3; j++) {
        cat.items.push(new ItemData(`prova ${i}-${j}`, ''));
      }
    }
    this.listIds = this.getListIds();
  }

  ngOnInit() {
  }

  dropItem(event: CdkDragDrop<Array<ItemData>>) {
    setTimeout(() => {
        this.itemComponents.toArray().forEach((itemcomp) => {
          // console.log(itemcomp.item);
          if (this.lastItemSelected === itemcomp.item) {
            itemcomp.select(event.item.data);
          }
        });
    }, 0);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dragStart(event: CdkDragStart<ItemData>) {
    this.itemComponents.toArray().forEach((itemcomp) => {
      if (itemcomp.isSelected && itemcomp.item === event.source.data) {
        this.lastItemSelected = event.source.data;
      } else {
        itemcomp.unselect();
      }
    });
  }

  dropCat(event: CdkDragDrop<Array<ItemCategory>>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }

  getListIds() {
    return [ ...this.categories.map(_ => _.name)];
  }
}
