import { ItemLink } from './../../classes/item-data-class';
import { DialogBoxComponent, DialogBoxConfig, UserChoice } from './../dialog-box/dialog-box.component';
import { CategoryEditDialogComponent } from './../category-edit-dialog/category-edit-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { ItemCategory } from '../../classes/item-category-class';
import { BehaviorSubject, config } from 'rxjs';
import {  } from 'electron';
import { ExpansionState, DescriptionState } from '../toolbar/toolbar.component';
import { MatExpansionPanel, MatDialog, MatSnackBar } from '@angular/material';
import { ItemComponent } from '../item/item.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';
import { ItemData } from '../../classes/item-data-class';
import { itemEditEvent } from '../item/item.interfaces';
import { ParsingStrategyError } from '../../classes/input-parsing-strategy';
import { style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
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
export class CategoryListComponent implements OnInit {
  //VARIABLES
  _listIds: Array<String> = new Array<String>();
  ids: BehaviorSubject<Array<String>> = new BehaviorSubject<Array<String>>([]);
  categories: Array<ItemCategory>;
  // _categories: Array<ItemCategory>;
  lastItemSelected: ItemData = undefined;
  processingError: BehaviorSubject<ParsingStrategyError> = new BehaviorSubject({message: '', error: undefined});
  @ViewChildren('expansionPanel') expansionPanels: QueryList<MatExpansionPanel>;
  @ViewChildren(ItemComponent) itemComponents: QueryList<ItemComponent>;
  @ViewChildren(CdkDrag) dragItems: QueryList<CdkDrag>;
  //INPUTS
  @Input() set data(cat: Promise<Array<ItemCategory>>) {
    if (!cat) { return; }
    cat.then((cats: Array<ItemCategory>) => {
      this.categories = cats;
      this.categories.forEach((category: ItemCategory) => {
        category.id = this.getUniqueId();
      });
      const ids = this.getListIds(cats);
      this.ids.next(ids);
      this.linkTo.ids.subscribe((linkids: Array<String>) => {
        this._listIds = ids;
        this._listIds = this._listIds.concat(linkids);
      });
      console.log(this.linkTo);
      // this.idsGenerated.emit(this.ids);
   }).catch((reason: ParsingStrategyError) => {
     this.processingError.next(reason);
   });
  }
  @Input() linkTo: CategoryListComponent;
  //OUTPUTS
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();
  @Output() idsGenerated: EventEmitter<Array<String>> = new EventEmitter<Array<String>>();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  getUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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
      moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
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

  getListIds(cats: Array<ItemCategory>): String[] {
      return [ ...cats.map(_ => _.id)];
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

    this.categories.forEach((category: ItemCategory) => {
      if (descriptionState === 'hide') {
        category.showDescription = false;
      } else {
        category.showDescription = true;
      }
    });
  }

  addCategory() {
    const addDialog = this.dialog.open(CategoryEditDialogComponent, {
      width: '60%',
      height: '80%',
      data: {
        data: undefined,
        title: 'Add category',
        mode: 'create'
      }
    });

    addDialog.afterClosed().subscribe((result: ItemCategory) => {
      console.log(result);
      if (result) {
        this.categories.push(result);
        this.categories.forEach((category: ItemCategory) => {
          category.id = this.getUniqueId();
        });
        const ids = this.getListIds(this.categories);
        this.ids.next(ids);
      } else {
        this.snackBar.open(`Category not added`, 'Ok', {
          duration: 2000,
          panelClass: 'snack-error'
        });
      }
    });

  }

  editCategory(ev, cat: ItemCategory) {
    ev.stopPropagation();
    this.dialog.open(CategoryEditDialogComponent, {
      width: '60%',
      height: '80%',
      data: {
        data: cat,
        title: 'Edit category',
        mode: 'edit'
      }
    });
  }

  removeItem(item: ItemData) {
    if (item) {
        this.categories.forEach((category: ItemCategory) => {
          category.items = category.items.filter(value => value !== item);
      });
    }
  }

  removeCategory(ev, cat: ItemCategory) {
    ev.stopPropagation();
    const dialogData = new DialogBoxConfig();
    dialogData.text = `Are you sure to delete the category ${cat.name}?`;
    dialogData.confirmBtn = {
      text: 'Delete',
      color: 'warn'
    };
    dialogData.onConfirm = (choice: UserChoice) => choice;
    const userChoice = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      data: dialogData
    });

    userChoice.afterClosed().subscribe((res: UserChoice) =>{
      if (res === 'confirmed'){
        this.categories = this.categories.filter(value => value !== cat);
        this.snackBar.open(`Category ${cat.name} deleted`,'Ok',{
          duration: 2000,
          panelClass: 'snack-info'
        });
      }
    });
  }

  addItemToCategory(category: ItemCategory) {
    category.items.unshift(new ItemData('New Item', {link: '', tag: this.getUniqueId()}));
  }

}
