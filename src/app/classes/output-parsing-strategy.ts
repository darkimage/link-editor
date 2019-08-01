import { ItemCategory } from './item-category-class';
import { InputParsingStrategy } from './input-parsing-strategy';

export class ParsingStrategyError {
    message: String;
    error: Error;
    constructor(message: String, error?: Error) {
        this.message = message;
        this.error = error;
    }
 }


export interface OutputParsingStrategy extends InputParsingStrategy {
    write(data: Array<ItemCategory>, savePath: String);
}
