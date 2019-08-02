import { InputParsingStrategy } from './input-parsing-strategy';
import { ItemCategory } from './item-category-class';

export class ChromeBookmarksInputStrategy implements InputParsingStrategy {

    getName(): String{
        return 'Chrome Bookmarks export file';
    }

    getDescription(): String{
        return 'Parse the output of the Chrome bookmarks bulk export';
    }

    process(data: Array<String>): Array<ItemCategory> {
        throw new Error('Method not implemented.');
    }
}
