import { InputParsingStrategy } from './input-parsing-strategy';
import { ItemCategory } from './item-category-class';

export class ChromeBookmarksInputStrategy implements InputParsingStrategy {

    process(data: Array<String>): Array<ItemCategory> {
        throw new Error('Method not implemented.');
    }

}
