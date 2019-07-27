import { OutputParsingStrategy } from './output-parsing-strategy';
import { ItemCategory } from './item-category-class';
import { ItemData } from './Item-data-class';

export class JekyllOutputStrategy implements OutputParsingStrategy {
    jekyllopts: String;

    constructor() {
    }
    process(data: String): Array<ItemCategory> {
        const jekylloptsReg = new RegExp(/(^(?!---).+)---/, 'gms');
        this.jekyllopts = data.match(jekylloptsReg)[0];

        const categoriesReg = new RegExp(/##(?<name>.*?)(?<description>>.*?(?=(?:<a|##)))(?<items><a.*?(?=(?:##|\[comment\])))*/, 'gs');
        const categoriesBlock = new Array<RegExpExecArray>();
        let match = categoriesReg.exec(data as string);
        while (match) {
            categoriesBlock.push(match);
            match = categoriesReg.exec(data as string);
        }
        console.log(categoriesBlock);
        console.log(data);


        const categories = new Array<ItemCategory>();
        for (let i = 0; i < 5; i++) {
            const cat = new ItemCategory('prova' + i);
            categories.push(cat);
            for (let j = 0; j < 3; j++) {
                cat.items.push(new ItemData(`prova ${i}-${j}`, ''));
            }
        }
        return categories;
    }
}
