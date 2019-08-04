import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemCategory } from '../../classes/item-category-class';

export type CreateDialogMode = 'edit' | 'create';

export interface CategoryDialogConfig {
  data: ItemCategory;
  title: String;
  mode: CreateDialogMode;
}

@Component({
  selector: 'app-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CategoryEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoryEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDialogConfig) {
      if (data.mode === 'create'){
        data.data = new ItemCategory('New Category');
      }
  }

  onNoClick(): void {
    this.confirm();
  }

  confirm() {
    if (this.data.data.name.length !== 0) {
      this.dialogRef.close(this.data.data);
    } else {
      this.dialogRef.close(undefined);
    }
  }

}
