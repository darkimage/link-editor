import { ElectronService } from './../providers/electron.service';
import { ItemCategory } from './../classes/item-category-class';
import { Injectable } from '@angular/core';
import { InputParsingStrategy, ParsingStrategyError } from '../classes/input-parsing-strategy';

@Injectable({
  providedIn: 'root'
})
export class FileProcessorService {

  constructor(private electron: ElectronService) { }

  getDataFromfiles(files) {
    const data = new Array<String>();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      data.push(this.electron.fs.readFileSync(file.path, 'utf8'));
    }
    return data;
  }

  processFile(data: Array<String>, strategy: InputParsingStrategy): Promise<Array<ItemCategory>> {
    try {
      const res = strategy.process(data);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(new ParsingStrategyError('Errors while parsing file', error));
    }
  }

  saveFile(savePath: String, content: any) {
    // console.log(content);
  }
}
