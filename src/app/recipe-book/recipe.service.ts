import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  recipesChanged = new Subject<Recipe[]>();

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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
