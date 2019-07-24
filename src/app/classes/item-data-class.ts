
export type DifficultyClass = 'Beginner' | 'Not Classified' | 'Intermidiate' | 'Advanced';

export class ItemData {
    name: String;
    link: String;
    difficulty: DifficultyClass = 'Not Classified';
    constructor(name: String, link: String) {
        this.name = name;
        this.link = link;
    }
}