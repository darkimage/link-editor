import { ItemComponent } from './../item/item.component';
import { ItemClickDirective } from './../../directives/item-click.directive';
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
  lastItemSelected: number = undefined;
  listIds = [];
  categories: Array<ItemCategory> = new Array<ItemCategory>();
  @ViewChildren(ItemClickDirective) selectItems: QueryList<ItemClickDirective>;
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
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      setTimeout(() => {
        event.container.data.forEach((value) => {
          if (value === event.item.data){
            console.log(event.item);
            this.selectItems.toArray().forEach((dir) => {
              if (dir.isDirectiveItem(event.item)) {
                dir.select();
              }
            });
          }
        });
      }, 0);

    }
  }

  dragStart(event: CdkDragStart<CdkDrag<ItemData>>) {
    setTimeout(() => {
      this.selectItems.forEach((dir) => {
        if (!dir.isDirectiveItem(event.source.data)) {
          dir.unselect();
        }
      });
    }, 0);
  }

  dropCat(event: CdkDragDrop<Array<ItemCategory>>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }

  getListIds() {
    return [ ...this.categories.map(_ => _.name)];
  }

  selectedItem(event: ItemData) {
    this.itemComponents.forEach((component) => {
      if(component.item === event) {
        component.setSelected();
      }
    });
  }

}
