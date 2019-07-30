import { ItemCategory } from './item-category-class';

export interface InputParsingStrategy {
    process(data: Array<String>): Array<ItemCategory>;
}
