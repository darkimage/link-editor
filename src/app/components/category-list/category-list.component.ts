import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { ItemCategory } from '../../classes/item-category-class';
import { BehaviorSubject } from 'rxjs';
import { ParsingStrategyError } from '../../classes/output-parsing-strategy';
import {  } from 'electron';
import { ExpansionState, DescriptionState } from '../toolbar/toolbar.component';
import { MatExpansionPanel } from '@angular/material';
import { ItemComponent } from '../item/item.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';
import { ItemData } from '../../classes/item-data-class';
import { itemEditEvent } from '../item/item.interfaces';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  //VARIABLES
  listIds = [];
  categories: Promise<Array<ItemCategory>>;
  lastItemSelected: ItemData = undefined;
  processingError: BehaviorSubject<ParsingStrategyError> = new BehaviorSubject({message: '', error: undefined});
  @ViewChildren('expansionPanel') expansionPanels: QueryList<MatExpansionPanel>;
  @ViewChildren(ItemComponent) itemComponents: QueryList<ItemComponent>;
  @ViewChildren(CdkDrag) dragItems: QueryList<CdkDrag>;
  //INPUTS
  @Input() set data(cat: Promise<Array<ItemCategory>>){
    this.categories = cat;
    this.categories.then(res => {
      this.getListIds();
   }).catch((reason: ParsingStrategyError) => {
     this.processingError.next(reason);
   });
  }
  //OUTPUTS
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  dropItem(event: CdkDragDrop<Array<ItemData>>) {
    setTimeout(() => {
        this.itemComponents.toArray().forEach((itemcomp) => {
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

  dropCat(event: CdkDragDrop<Array<ItemCategory>>) {
    this.categories.then(res => {
      moveItemInArray(res, event.previousIndex, event.currentIndex);
    });
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

  itemEditing(ev: itemEditEvent) {
    if (ev.action === 'key') {
      console.log(ev);
      ev.component.el.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    this.dragItems.toArray().forEach((drag: CdkDrag<ItemData>) => {
      if (drag.data === ev.component.item) {
        drag.disabled = true;
      }
    });
  }

  itemEditingEnd(ev: itemEditEvent) {
    this.dragItems.toArray().forEach((drag: CdkDrag<ItemData>) => {
      if (drag.data === ev.component.item) {
        drag.disabled = false;
      }
    });
  }

  getListIds() {
    this.categories.then(res => {
      this.listIds = [ ...res.map(_ => _.name)];
    });
  }

  resetDropContainerOut() {
    this.reset.emit();
    this.processingError.next({message: '', error: undefined});
  }

  toggleExpansionOut(expansionState: ExpansionState){
    this.expansionPanels.toArray().forEach((panel: MatExpansionPanel) => {
        if (expansionState === 'expanded') {
          panel.open();
        } else {
          panel.close();
        }
    });
  }

  toggleDescriptionsOut(descriptionState: DescriptionState){
    this.itemComponents.toArray().forEach((item: ItemComponent) => {
        if (descriptionState === 'hide') {
          item.showDescription = false;
        } else {
          item.showDescription = true;
        }
    });
  }

}
