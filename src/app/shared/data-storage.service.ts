import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from './../recipe-book/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put('https://recipe-book-de100.firebaseio.com/recipes.json', recipes)
      .subscribe(recipe => {
        console.log(recipe);
      });
  }
}
