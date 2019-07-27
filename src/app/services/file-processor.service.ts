import { ItemCategory } from './../classes/item-category-class';
import { JekyllOutputStrategy } from './../classes/jekyll-output';
import { Injectable } from '@angular/core';
import { OutputParsingStrategy } from '../classes/output-parsing-strategy';

@Injectable({
  providedIn: 'root'
})
export class FileProcessorService {

  constructor() { }

  processOutputFile(data: String, strategy: OutputParsingStrategy = new JekyllOutputStrategy): Promise<Array<ItemCategory>> {
    return new Promise<Array<ItemCategory>>(resolve => {
      const res = strategy.process(data);
      resolve(res);
    });
  }

}
