import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Name 1',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ),
    new Recipe(
      'Test Recipe Name 2 ',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ),
    new Recipe(
      'Test Recipe Name 3',
      'This is test recipe description',
      'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    )
  ];

  constructor() {}

  ngOnInit() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
