import { ItemCategory } from './item-category-class';
import { InputParsingStrategy } from './input-parsing-strategy';

export interface OutputParsingStrategy extends InputParsingStrategy {
    write(data: Array<ItemCategory>): String;
}
