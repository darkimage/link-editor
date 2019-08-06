import { FileProcessorService } from './../services/file-processor.service';
import { OutputParsingStrategy } from './output-parsing-strategy';
import { ItemCategory } from './item-category-class';
import { ItemData, ItemLink } from './item-data-class';

export class JekyllOutputStrategy implements OutputParsingStrategy {

    jekyllopts: String;
    constructor(private fileservice: FileProcessorService) {}

    getName(): String {
        return 'Jekyll page file';
    }

    getDescription(): String{
        return 'Parse a Jekyll markdown page file';
    }

    process(files: Array<String>): Array<ItemCategory> {
        const categoriesArray = new Array<ItemCategory>();
        files.forEach((data: String) => {
            const jekylloptsReg = new RegExp(/(?<opts>^(?!---).+)---/, 'gms');
            this.jekyllopts = jekylloptsReg.exec(data as string).groups.opts;
            const categoriesReg = new RegExp(/##(?<name>.*?)(?<description>>.*?(?=(?:<a|##)))(?<items><a.*?(?=(?:##|\[comment\])))*/, 'gs');
            let match = categoriesReg.exec(data as string) as any;
            while (match) {
                const currCat = new ItemCategory(match.groups.name, match.groups.description);
                categoriesArray.push(currCat);
                const itemReg = new RegExp(
                    /class=".*?btn--(?<style>.+?)(?="|\s).*?>(?<difficulty>.+?)<\/a.*?\[(?<name>.+?)\]\[(?<link>.+?)\]<br>(?<description>.*?)(?=(?:<a|%end%))/,
                'gms');
                const items = new Array<ItemData>();
                const itemString = match.groups.items + '\n %end%';
                let itemMatch = itemReg.exec(itemString) as any;
                while (itemMatch) {
                    const itemgroups = itemMatch.groups;
                    items.push(new ItemData(itemgroups.name,
                        {tag: itemgroups.link, link: ''},
                        itemgroups.description,
                        itemgroups.difficulty, itemgroups.style));
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
        });
        if (categoriesArray.length === 0) {
            throw new Error('Nothing parsed');
        }
        return categoriesArray;
    }

    write(data: ItemCategory[]): String {
        let content = `---${this.jekyllopts}---\n`;
        let links = '';
        data.forEach((cat: ItemCategory) => {
            content += `## ${cat.name}${cat.description}`;
            cat.items.forEach((item: ItemData) => {
                content += `<a class="btn disabled btn--small btn--${item.difficulty.style.class}">${item.difficulty.text}</a> [${item.name}][${item.link.tag}]<br> ${item.description}\n\n`;
                links += `[${item.link.tag}]: ${item.link.link}\n`;
            });
        });
        content += `\n[comment]: <> (Raccolta dei link)\n${links}`;
        return content;
    }
}
