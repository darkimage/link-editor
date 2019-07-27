import { ItemCategory } from "./item-category-class";

export interface OutputParsingStrategy {
    process(data: String): Array<ItemCategory>;
    write(data: Array<ItemCategory>);
}
