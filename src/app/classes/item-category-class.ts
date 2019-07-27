import { ItemData } from './item-data-class';

export class ItemCategory {
    name: String = 'Uncategorized';
    description: String = '';
    items: Array<ItemData> =  new Array<ItemData>();
    constructor(name: String) {
        this.name = name;
    }
}
