import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Name 1',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      [
        new Ingredient('Fleur', 1),
        new Ingredient('Eggs', 3)
      ]
    ),
    new Recipe(
      'Test Recipe Name 2 ',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      [
        new Ingredient('Cocoa', 1),
        new Ingredient('Milk', 3)
      ]
    ),
    new Recipe(
      'Test Recipe Name 3',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
