// export enum DifficultyClass {
//     Beginner = 'Beginner',
//     Intermediate = 'Intermediate',
//     Expert = 'Expert',
//     NotClassified = 'NotClassified'
// };

export enum DifficultyStyleClass {
    info = 'info',
    danger = 'danger',
    success = 'success',
    warning = 'warning',
    primary = 'primary',
}

export interface DifficultyStyle {
    class: DifficultyStyleClass;
    value: String;
}

export interface Difficulty {
    text: String;
    style: DifficultyStyle;
}


export interface ItemLink { tag: String; link: String; }

export class ItemData {
    name: String;
    link: ItemLink;
    difficulty: Difficulty;
    description: String;
    constructor(name: String, link: ItemLink, description?: String, difficulty?: String, difficultyStyle?: String) {
        this.name = name;
        this.link = link;
        if (description) {
            this.description = description;
        }

        const style = ItemData.getDifficultyStyle(difficultyStyle);
        this.difficulty = {text: (difficulty) ? difficulty : 'Not Classfied', style: style};
    }

    static getDifficultyStyle(diff: String): DifficultyStyle {
        if (!diff) { return {class: DifficultyStyleClass.info, value: ''};}
        switch (diff.toLowerCase()) {
            case 'success':
                return {class: DifficultyStyleClass.success, value: '#3fa63f'};
            case 'warning':
                return {class: DifficultyStyleClass.warning, value: '#d67f05'};
            case 'danger':
                return {class: DifficultyStyleClass.danger, value: '#ee5f5b'};
            case 'primary':
                return {class: DifficultyStyleClass.primary, value: '#007bff'};
            default:
                return {class: DifficultyStyleClass.info, value: ''};
        }
    }
}