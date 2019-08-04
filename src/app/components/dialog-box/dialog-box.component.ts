import { Component, Inject, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export type UserChoice = 'confirmed' | 'cancelled';

export class DialogButtonConfig {
  text: String;
  color: String;
}

export class DialogBoxConfig {
  text: String;
  confirmBtn: DialogButtonConfig = {
    text: 'Yes',
    color: 'primary'
  };
  cancelBtn: DialogButtonConfig = {
    text: 'Cancel',
    color: ''
  };
  onConfirm: (choice: UserChoice) => any;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogBoxConfig,
    private render: Renderer2) {
    }

  onNoClick(): void {
    this.confirm('cancelled');
  }

  confirm(choice: UserChoice) {
    this.dialogRef.close(this.data.onConfirm(choice));
  }
}
