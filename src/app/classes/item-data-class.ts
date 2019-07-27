import { DifficultyClass } from './item-data-class';

export type DifficultyClass = 'Beginner' | 'Not Classified' | 'Intermidiate' | 'Advanced';
export interface ItemLink { tag: String; link: String; }

export class ItemData {
    name: String;
    link: ItemLink;
    difficulty: DifficultyClass = 'Not Classified';
    description: String = '';
    constructor(name: String, link: ItemLink, description?: String, difficulty?: DifficultyClass) {
        this.name = name;
        this.link = link;
        if (description) {
            this.description = description;
        }
        if (difficulty) {
            this.difficulty = difficulty;
        }
    }
}