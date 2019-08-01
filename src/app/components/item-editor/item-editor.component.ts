import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ItemData, DifficultyClass, Difficulty } from '../../classes/item-data-class';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  @Output() preventClose: EventEmitter<Boolean> =  new EventEmitter<Boolean>();
  difficultyValues: Array<Difficulty> = new Array<Difficulty>(
    ItemData.getDifficulty('Beginner'),
    ItemData.getDifficulty('Intermediate'),
    ItemData.getDifficulty('Expert'),
    ItemData.getDifficulty('NotClassified')
  );
  @Input() item: ItemData;
  constructor() { }

  ngOnInit() {
  }

  preventCloseEditMode() {
    this.preventClose.emit(false);
    setTimeout(() => {
      this.preventClose.emit(true);
    }, 0);
  }

  compareDifficulty = (d1: Difficulty, d2: Difficulty) => d1.class === d2.class;

}
