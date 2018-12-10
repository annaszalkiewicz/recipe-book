import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe Name', 'This is test recipe description', 'https://cdn.pixabay.com/photo/2013/11/28/04/15/cake-219595_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
