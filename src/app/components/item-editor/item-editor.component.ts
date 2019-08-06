import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemData, Difficulty, DifficultyStyle } from '../../classes/item-data-class';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  form: FormGroup;
  _item: ItemData;
  previewDesc: String;
  @Output() preventClose: EventEmitter<Boolean> =  new EventEmitter<Boolean>();
  difficultyValues: Array<DifficultyStyle> = new Array<DifficultyStyle>(
    ItemData.getDifficultyStyle('primary'),
    ItemData.getDifficultyStyle('success'),
    ItemData.getDifficultyStyle('danger'),
    ItemData.getDifficultyStyle('warning'),
    ItemData.getDifficultyStyle('info'),
  );
  @Input() set item(data: ItemData) {
    this._item = data;
    // console.log(this._item);
    this.form = new FormGroup({
      name: new FormControl(data.name),
      difficultyName: new FormControl(data.difficulty.text),
      difficultyColor: new FormControl(data.difficulty.style),
      description: new FormControl(data.description),
      link: new FormControl(data.link.link),
      linkTag: new FormControl(data.link.tag)
    });
  }
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

  Update() {
    this._item.name = this.form.get('name').value;
    this._item.description = this.form.get('description').value;
    this._item.link.link = this.form.get('link').value;
    this._item.link.tag = this.form.get('linkTag').value;
    this._item.difficulty.style = this.form.get('difficultyColor').value;
    this._item.difficulty.text = this.form.get('difficultyName').value;
  }

  updateDesc() {
    // console.log(this.form.get('description').value);
    this.previewDesc = this.form.get('description').value;
  }

}
