import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe Name 1', 'This is test recipe description', 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
    new Recipe('Test Recipe Name 2 ', 'This is test recipe description', 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
    new Recipe('Test Recipe Name 3', 'This is test recipe description', 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
