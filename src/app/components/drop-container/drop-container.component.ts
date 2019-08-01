import { ParsingStrategyError } from './../../classes/output-parsing-strategy';
import { ElectronService } from './../../providers/electron.service';
import { FileProcessorService } from './../../services/file-processor.service';
import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { ItemCategory } from '../../classes/item-category-class';
import { ItemData } from '../../classes/item-data-class';
import { Observable, BehaviorSubject } from 'rxjs';

export type inputType = 'output' | 'input';

@Component({
  selector: 'app-drop-container',
  templateUrl: './drop-container.component.html',
  styleUrls: ['./drop-container.component.scss']
})
export class DropContainerComponent implements OnInit {
  hasDropped: Boolean = false;
  @Input() input: inputType = 'output';
  @Output() processedData: EventEmitter<Promise<Array<ItemCategory>> | Promise<Array<ItemData>>> = new EventEmitter();
  constructor(
    private processor: FileProcessorService,
    private electron: ElectronService
    ) { }

  ngOnInit() {
  }

  async onFileDropped(ev: Array<any>) {
    const processOut =  new Promise<Array<ItemCategory>>((resolve, reject) => {
      // setTimeout(() => {
        const data = new Array<String>();
        console.log(ev.length);
        for (let i = 0; i < ev.length; i++) {
          const file = ev[i];
          data.push(this.electron.fs.readFileSync(file.path, 'utf8'));
        }
        console.log(data);
        this.processor.processOutputFile(data).then((res) => {
          resolve(res);
        }).catch((error: ParsingStrategyError) => {
          reject(error);
        });
      });
      // }, 1000000);
    // });
    if (this.input === 'output') {
      // this.processedData.emit(processOut);
      this.hasDropped = true;
      this.processedData.next(processOut);
    }
  }

  reset() {
    this.hasDropped = false;
  }

}
