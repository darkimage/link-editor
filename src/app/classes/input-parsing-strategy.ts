import { ItemCategory } from './item-category-class';

export class ParsingStrategyError {
    message: String;
    error: Error;
    constructor(message: String, error?: Error) {
        this.message = message;
        this.error = error;
    }
}

export interface InputParsingStrategy {
    getName(): String;
    getDescription(): String;
    process(data: Array<String>): Array<ItemCategory>;
}
