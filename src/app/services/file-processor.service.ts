import { ItemCategory } from './../classes/item-category-class';
import { JekyllOutputStrategy } from './../classes/jekyll-output';
import { Injectable } from '@angular/core';
import { OutputParsingStrategy, ParsingStrategyError } from '../classes/output-parsing-strategy';

@Injectable({
  providedIn: 'root'
})
export class FileProcessorService {

  constructor() { }

  processOutputFile(data: Array<String>, strategy: OutputParsingStrategy = new JekyllOutputStrategy(this)): Promise<Array<ItemCategory>> {
    try {
      const res = strategy.process(data);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(new ParsingStrategyError('Errors while parsing output file', error));
    }
  }

  saveFile(savePath: String, content: any) {
    // console.log(content);
  }
}
