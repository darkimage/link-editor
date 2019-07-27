import { FileProcessorService } from './../../services/file-processor.service';
import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { ItemCategory } from '../../classes/item-category-class';
import { ItemData } from '../../classes/Item-data-class';
import { Observable, BehaviorSubject } from 'rxjs';

export type inputType = 'output' | 'input';

@Component({
  selector: 'app-drop-container',
  templateUrl: './drop-container.component.html',
  styleUrls: ['./drop-container.component.scss']
})
export class DropContainerComponent implements OnInit {
  hasDropped: Boolean = false;
  input: inputType = 'output';
  // processedData: BehaviorSubject<Array<ItemCategory> | Array<ItemData>> = new BehaviorSubject([]);
  @Output() processedData: EventEmitter<Promise<Array<ItemCategory>> | Promise<Array<ItemData>>> = new EventEmitter();
  constructor(private processor: FileProcessorService) { }

  ngOnInit() {
  }

  async onFileDropped(ev: Array<any>) {
    const processOut =  new Promise<Array<ItemCategory>>((resolve) => {
      // setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (load: ProgressEvent) => {
          this.processor.processOutputFile(reader.result as String).then((res) => {
            resolve(res);
          });
        };
        reader.readAsText(ev[0]);
      });
      // }, 1000000);
    // });
    if (this.input === 'output') {
      // this.processedData.emit(processOut);
      this.hasDropped = true;
      this.processedData.next(processOut);
    }
  }
}
