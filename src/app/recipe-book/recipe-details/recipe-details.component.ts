import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }

  onClick() {
    const dropdown = document.getElementById('dropdown-open');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    } else {
      dropdown.classList.add('show');
    }
  }

  onAddToShoppingList() {
    this.recipeservice.addToShoppingList(this.recipe.ingredients);
  }

}
