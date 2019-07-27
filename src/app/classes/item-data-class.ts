import { DifficultyClass } from './item-data-class';

export type DifficultyClass = 'Beginner' | 'Not Classified' | 'Intermidiate' | 'Advanced';

export class ItemData {
    name: String;
    link: String;
    difficulty: DifficultyClass = 'Not Classified';
    description: String = '';
    constructor(name: String, link: String, description?: String, difficulty?: DifficultyClass) {
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