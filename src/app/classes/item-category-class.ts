import { ItemData } from './item-data-class';

export class ItemCategory {
    name: String = 'Uncategorized';
    description: String = '';
    items: Array<ItemData> =  new Array<ItemData>();
    constructor(name: String, description?: String, items?: Array<ItemData>) {
        this.name = name;
        this.description = (description) ? description : this.description;
        this.items = (items) ? items : this.items; 
    }
}
