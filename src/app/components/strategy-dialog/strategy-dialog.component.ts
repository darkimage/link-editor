import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InputParsingStrategy } from '../../classes/input-parsing-strategy';

export class DialogStrategyConfig {
  strategies: Array<InputParsingStrategy>;
  width: String =  '250px';
}


@Component({
  selector: 'app-strategy-dialog',
  templateUrl: './strategy-dialog.component.html',
  styleUrls: ['./strategy-dialog.component.scss']
})
export class StrategyDialogComponent {
  strategy: InputParsingStrategy;

  constructor(
    public dialogRef: MatDialogRef<StrategyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogStrategyConfig) {
      this.strategy = data.strategies[0];
  }

  compareStrategies = (p1: InputParsingStrategy, p2: InputParsingStrategy) => p1.getName() === p2.getName();

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(this.strategy);
  }

}
