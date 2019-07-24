import { ItemData } from './item-data-class';

export class ItemCategory {
    name: String = 'Uncategorized';
    items: Array<ItemData> =  new Array<ItemData>();
    constructor(name: String) {
        this.name = name;
    }
}
