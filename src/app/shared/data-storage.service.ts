import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from './../recipe-book/recipe.service';
import { Recipe } from './../recipe-book/recipe.model';

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

  getRecipes() {
    this.http
      .get<Recipe[]>('https://recipe-book-de100.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
