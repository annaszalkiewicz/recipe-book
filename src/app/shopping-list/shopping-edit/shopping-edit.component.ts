import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') editShoppingList: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.editShoppingList);

    const name = this.editShoppingList.value.ingredient;
    const amount = this.editShoppingList.value.amount;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
