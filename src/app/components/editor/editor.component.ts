import { ElectronService } from './../../providers/electron.service';
import { ChromeBookmarksInputStrategy } from './../../classes/chrome-bookmarks-input-strategy';
import { JekyllOutputStrategy } from './../../classes/jekyll-output';
import { FileProcessorService, FileWriteError } from './../../services/file-processor.service';
import { DialogStrategyConfig } from './../strategy-dialog/strategy-dialog.component';
import { CategoryListComponent } from './../category-list/category-list.component';
import { ItemComponent } from './../item/item.component';
import { ItemCategory } from './../../classes/item-category-class';
import { Component, OnInit, Renderer2, QueryList, ViewChildren, ViewChild, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragStart} from '@angular/cdk/drag-drop';
import { ItemData } from '../../classes/item-data-class';
import { NgScrollbar } from 'ngx-scrollbar';
import { itemEditEvent } from './../item/item.interfaces';
import {ExpansionState, DescriptionState} from '../toolbar/toolbar.component';
import { MatExpansionPanel, MatSnackBar } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { DropContainerComponent } from '../drop-container/drop-container.component';
import { InputParsingStrategy } from '../../classes/input-parsing-strategy';
import { OutputParsingStrategy } from '../../classes/output-parsing-strategy';

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
  outData: Promise<Array<ItemCategory>>;
  inData: Promise<Array<ItemCategory>>;
  outDropConfig: DialogStrategyConfig;
  inDropConfig: DialogStrategyConfig;
  inputIds: String[];
  outputIds: String[];
  PanelLeftVisible: Boolean = true;
  PanelRightVisible: Boolean = true;
  _inputList: CategoryListComponent;
  _outputList: CategoryListComponent;
  @ViewChild('outDropContainer', {static: true}) outDropContainer: DropContainerComponent;
  @ViewChild('inDropContainer', {static: true}) inDropContainer: DropContainerComponent;
  @ViewChild('inputList', {static: false}) inputList: CategoryListComponent;
  @ViewChild('outputList', {static: false}) outputList: CategoryListComponent;

  constructor(
    private fileService: FileProcessorService,
    private electron: ElectronService,
    private snackbar: MatSnackBar
    ) {
    this.outDropConfig = {
      width: '40%',
      strategies: new Array<InputParsingStrategy>(
        new JekyllOutputStrategy(fileService)
        )
    };
    this.inDropConfig = {
      width: '40%',
      strategies: new Array<InputParsingStrategy>(
        new ChromeBookmarksInputStrategy()
        )
    };
  }

  ngOnInit() {
  }

  @Input() set layout(layout: LayoutStyle){
    this.PanelLeftVisible = layout === LayoutStyle.columnLeft || layout === LayoutStyle.columnLeftRight;
    this.PanelRightVisible = layout === LayoutStyle.columnRight || layout === LayoutStyle.columnLeftRight;
  }

  outputProcessed(data: Promise<Array<ItemCategory>>) {
    this.outData = data;
  }

  inputProcessed(data: Promise<Array<ItemCategory>>) {
    this.inData = data;
  }

  resetDropContainerOut() {
    this.outDropContainer.reset();
  }

  resetDropContainerIn() {
    this.inDropContainer.reset();
  }

  exportOut(strategy: OutputParsingStrategy) {
    this.electron.dialog.showSaveDialog({
      title: 'Save Output File',
      filters: [
        {name: strategy.getName() as string, extensions: ['md']}
      ]
    },
    (filename?: string, bookmark?: string) => {
      if (filename) {
        this.fileService.saveFile(filename, strategy, this.outputList.categories).then(res =>{
          if(res){
            this.snackbar.open('Output file written successfully', 'Ok' , {
              duration: 2000,
              panelClass: 'snack-info'
            });
          }
        }).catch((reson: FileWriteError) =>{
          this.snackbar.open(reson.message as string, 'Ok' , {
            duration: 2000,
            panelClass: 'snack-error'
          });
        });
      }
    });
  }
}
