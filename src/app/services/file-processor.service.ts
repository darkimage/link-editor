import { ElectronService } from './../providers/electron.service';
import { ItemCategory } from './../classes/item-category-class';
import { Injectable } from '@angular/core';
import { InputParsingStrategy, ParsingStrategyError } from '../classes/input-parsing-strategy';
import { OutputParsingStrategy } from '../classes/output-parsing-strategy';

export class FileWriteError {
  message: String;
  error: Error;
  constructor(message: String, error?: Error) {
      this.message = message;
      this.error = error;
  }
}

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

  saveFile(savePath: String, strategy: OutputParsingStrategy, data: Array<ItemCategory>): Promise<Boolean> {
    try {
      const content = strategy.write(data);
      this.electron.fs.writeFileSync(savePath as string, content);
      return Promise.resolve(true);
    } catch (error) {
      Promise.reject(new FileWriteError(`Cannot write output file: ${savePath}`, error));
    }
  }
}
