import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeservice: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)  => {
        this.recipe = this.recipeservice.getRecipe(params['id']);
      }
    );
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
