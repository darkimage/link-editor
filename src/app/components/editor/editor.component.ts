import { ParsingStrategyError } from './../../classes/output-parsing-strategy';
import { ItemComponent } from './../item/item.component';
import { ItemCategory } from './../../classes/item-category-class';
import { Component, OnInit, Renderer2, QueryList, ViewChildren, ViewChild, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragStart} from '@angular/cdk/drag-drop';
import { ItemData } from '../../classes/item-data-class';
import { NgScrollbar } from 'ngx-scrollbar';
import { itemEditEvent } from './../item/item.interfaces';
import {ExpansionState, DescriptionState} from '../toolbar/toolbar.component';
import { MatExpansionPanel } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { DropContainerComponent } from '../drop-container/drop-container.component';

export enum LayoutStyle {
  columnLeft,
  columnRight,
  columnLeftRight
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  lastItemSelected: ItemData = undefined;
  listIds = [];
  categories: Promise<Array<ItemCategory>>;
  PanelLeftVisible: Boolean = true;
  PanelRightVisible: Boolean = true;
  OutputProcessingError: BehaviorSubject<ParsingStrategyError> = new BehaviorSubject({message: '', error: undefined})
  @ViewChild('outDropContainer', {static: true}) outDropContainer: DropContainerComponent;
  @ViewChildren(ItemComponent) itemComponents: QueryList<ItemComponent>;
  @ViewChildren('OutitemComponents') OutitemComponents: QueryList<ItemComponent>;
  @ViewChildren('OutExpansionPanel') OutExpansionPanels: QueryList<MatExpansionPanel>;
  @ViewChildren(CdkDrag) dragItems: QueryList<CdkDrag>;
  @ViewChild('scrollLeft', {static: true}) leftScroll: NgScrollbar;

  constructor() {}

  ngOnInit() {
  }

  @Input() set layout(layout: LayoutStyle){
    this.PanelLeftVisible = layout === LayoutStyle.columnLeft || layout === LayoutStyle.columnLeftRight;
    this.PanelRightVisible = layout === LayoutStyle.columnRight || layout === LayoutStyle.columnLeftRight;
    console.log(layout);
    console.log(this.PanelLeftVisible);
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
    this.categories.then(res => {
      moveItemInArray(res, event.previousIndex, event.currentIndex);
    });
  }

  getListIds() {
    this.categories.then(res => {
      this.listIds = [ ...res.map(_ => _.name)];
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

  outputProcessed(data: Promise<Array<ItemCategory>>) {
    this.categories = data;
    this.categories.then(res => {
       this.getListIds();
    }).catch((reason: ParsingStrategyError) => {
      this.OutputProcessingError.next(reason);
    });
  }

  log(ev) {
    console.log(ev);
  }

  toggleExpansionOut(expansionState: ExpansionState){
    this.OutExpansionPanels.toArray().forEach((panel: MatExpansionPanel) => {
        if (expansionState === 'expanded') {
          panel.open();
        } else {
          panel.close();
        }
    });
  }

  toggleDescriptionsOut(descriptionState: DescriptionState){
    this.OutitemComponents.toArray().forEach((item: ItemComponent) => {
        if (descriptionState === 'hide') {
          item.showDescription = false;
        } else {
          item.showDescription = true;
        }
    });
  }

  resetDropContainerOut(){
    this.outDropContainer.reset();
    this.OutputProcessingError.next({message: '', error: undefined});
  }
}
