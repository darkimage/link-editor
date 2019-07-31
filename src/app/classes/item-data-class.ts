export enum DifficultyClass {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Expert = 'Expert',
    NotClassified = 'NotClassified'
};

interface Difficulty {
    class: DifficultyClass;
    value: String;
}


export interface ItemLink { tag: String; link: String; }

export class ItemData {
    name: String;
    link: ItemLink;
    difficulty: Difficulty;
    description: String;
    constructor(name: String, link: ItemLink, description?: String, difficulty?: String) {
        this.name = name;
        this.link = link;
        if (description) {
            this.description = description;
        }
        this.difficulty = ItemData.getDifficulty(difficulty);
    }

    static getDifficulty(diff: String): Difficulty {
        switch (diff.toLowerCase()) {
            case 'beginner':
                return {class: DifficultyClass.Beginner, value: '#3fa63f'};
            case 'intermediate':
                return {class: DifficultyClass.Intermediate, value: '#d67f05'};
            case 'expert':
                return {class: DifficultyClass.Expert, value: '#ee5f5b'};
            default:
                return {class: DifficultyClass.NotClassified, value: ''};
        }
    }
}