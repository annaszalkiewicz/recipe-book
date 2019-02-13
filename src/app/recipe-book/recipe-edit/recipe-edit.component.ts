import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {

    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);

      recipeName = recipe.name;
      recipeImageUrl = recipe.imageUrl;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imageUrl: new FormControl(recipeImageUrl),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
