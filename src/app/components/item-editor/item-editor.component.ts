import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemData, Difficulty, DifficultyStyle } from '../../classes/item-data-class';

@Component({
  selector: 'item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  @Output() preventClose: EventEmitter<Boolean> =  new EventEmitter<Boolean>();
  difficultyValues: Array<DifficultyStyle> = new Array<DifficultyStyle>(
    ItemData.getDifficultyStyle('primary'),
    ItemData.getDifficultyStyle('success'),
    ItemData.getDifficultyStyle('danger'),
    ItemData.getDifficultyStyle('warning'),
    ItemData.getDifficultyStyle('info'),
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

  compareDifficulty = (d1: DifficultyStyle, d2: DifficultyStyle) => d1.class === d2.class;

}
