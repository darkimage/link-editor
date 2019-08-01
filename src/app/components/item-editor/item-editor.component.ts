import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemData, Difficulty } from '../../classes/item-data-class';

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

  ngOnInit() {}

  preventCloseEditMode(oneTime: Boolean = true) {
    this.preventClose.emit(false);
    if (oneTime) {
      setTimeout(() => {
        this.restoreCloseEditMode();
      }, 0);
    }
  }

  restoreCloseEditMode() {
    this.preventClose.emit(true);
  }

  compareDifficulty = (d1: Difficulty, d2: Difficulty) => d1.class === d2.class;

}
