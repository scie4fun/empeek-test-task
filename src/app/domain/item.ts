import { Comment } from "./comment";

export class Item {
    isSelected: boolean;

    constructor(public title: string, public comments: Comment[]) {}
}

export const defaultItems = [
    new Item('A very first Item', [
        new Comment('Hello there!'),
        new Comment("It is nice weather Today! Isn't it?"),
        new Comment("Let's go for a walk!")
    ]),
    new Item('A second default item', [
        new Comment('Wake up!'),
        new Comment('Are you ready to go?')
    ])
];