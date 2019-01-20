import { Ingredient } from './../shared/ingredient.model';

export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients: Ingredient[];

  constructor(id: string, name: string, desc: string, image: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imageUrl = image;
    this.ingredients = ingredients;
  }
}
