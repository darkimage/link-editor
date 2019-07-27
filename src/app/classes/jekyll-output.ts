import { OutputParsingStrategy } from './output-parsing-strategy';
import { ItemCategory } from './item-category-class';
import { ItemData, ItemLink } from './Item-data-class';

export class JekyllOutputStrategy implements OutputParsingStrategy {

    jekyllopts: String;

    constructor() {
    }
    process(data: String): Array<ItemCategory> {
        const jekylloptsReg = new RegExp(/(^(?!---).+)---/, 'gms');
        this.jekyllopts = data.match(jekylloptsReg)[0];
        const categoriesReg = new RegExp(/##(?<name>.*?)(?<description>>.*?(?=(?:<a|##)))(?<items><a.*?(?=(?:##|\[comment\])))*/, 'gs');
        const categoriesArray = new Array<ItemCategory>();
        let match = categoriesReg.exec(data as string) as any;
        while (match) {
            const currCat = new ItemCategory(match.groups.name, match.groups.description);
            categoriesArray.push(currCat);
            const itemReg = new RegExp(
                />(?<difficulty>.+?)<\/a.*?\[(?<name>.+?)\]\[(?<link>.+?)\]<br>(?<description>.*?)(?=(?:<a|%end%))/, 'gms');
            const items = new Array<ItemData>();
            const itemString = match.groups.items + '\n %end%';
            let itemMatch = itemReg.exec(itemString) as any;
            while (itemMatch) {
                items.push(new ItemData(itemMatch.groups.name,
                    {tag: itemMatch.groups.link, link: ''},
                    itemMatch.groups.description,
                    itemMatch.groups.difficulty));
                itemMatch = itemReg.exec(itemString);
            }
            currCat.items = items;
            match = categoriesReg.exec(data as string);
        }
        const linksReg = new RegExp(/\[(?<tag>[^\]]+)\]:\s*(?<link>.+)/, 'gm');
        const links = Array<ItemLink>();
        match = linksReg.exec(data as string);
        while (match) {
            links.push({tag: match.groups.tag, link: match.groups.link});
            match = linksReg.exec(data as string);
        }

        categoriesArray.forEach((cat: ItemCategory) => {
            cat.items.forEach((item: ItemData) => {
                links.forEach((link: ItemLink) =>{
                    if (item.link.tag === link.tag) {
                        item.link = link;
                    }
                });
            });
        });
        // console.log(categoriesArray);
        // console.log(links);
        // console.log(data);


        // const categories = new Array<ItemCategory>();
        // for (let i = 0; i < 5; i++) {
        //     const cat = new ItemCategory('prova' + i);
        //     categories.push(cat);
        //     for (let j = 0; j < 3; j++) {
        //         cat.items.push(new ItemData(`prova ${i}-${j}`, {link:'', tag:''}));
        //     }
        // }
        return categoriesArray;
    }

    write(data: ItemCategory[]) {
        throw new Error('Method not implemented.');
    }
}
