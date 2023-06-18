//Create class => Drink//
export default class Drink {
    constructor(id, image, title, category, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, instructions) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.category = category;
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.ingredient3 = ingredient3;
        this.ingredient4 = ingredient4;
        this.ingredient5 = ingredient5;
        this.instructions = instructions
    }
}