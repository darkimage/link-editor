import { ItemData, ItemLink } from './item-data-class';
import { InputParsingStrategy } from './input-parsing-strategy';
import { ItemCategory } from './item-category-class';

export class ChromeBookmarksInputStrategy implements InputParsingStrategy {

    getName(): String{
        return 'Chrome Bookmarks export file';
    }

    getDescription(): String{
        return 'Parse the output of the Chrome bookmarks bulk export';
    }

    getUniqueTag() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    process(files: Array<String>): Array<ItemCategory> {
        const categoriesArray = new Array<ItemCategory>();
        files.forEach((data: String) => {
            data += '%end%';
            const categoriesBlockReg = new RegExp(/<H3.*?>(?<name>.*?)<\/H3>(?<content>.+?)(?=<H3|%end%)/, 'gms');
            const categoriesBlock = new Array<{cat: ItemCategory, data: String}>();
            let match = categoriesBlockReg.exec(data as string);
            while (match) {
                const itemcat = new ItemCategory(match.groups.name)
                categoriesArray.push(itemcat);
                categoriesBlock.push({cat: itemcat, data: match.groups.content});
                match = categoriesBlockReg.exec(data as string);
            }
            const itemsReg = new RegExp(/<DT.+?HREF="(?<link>.+?)".+?>(?<name>.*?)</,'gm');
            categoriesBlock.forEach(block => {
                match = itemsReg.exec(block.data as string);
                while (match) {
                    const itemlink: ItemLink = {link: match.groups.link, tag: this.getUniqueTag() };
                    let name = match.groups.name;
                    if ( match.groups.name.length === 0) {
                        name = 'No Name';
                    }
                    block.cat.items.push(new ItemData(name, itemlink));
                    match = itemsReg.exec(block.data  as string);
                }
            });
        });
        return categoriesArray;
    }
}
