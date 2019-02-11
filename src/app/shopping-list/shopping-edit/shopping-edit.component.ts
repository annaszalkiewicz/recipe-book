import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') editShoppingList: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd() {
    console.log(this.editShoppingList);

    const name = this.editShoppingList.value.ingredient;
    const amount = this.editShoppingList.value.amount;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
