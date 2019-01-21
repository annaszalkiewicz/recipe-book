import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'add',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailsComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      },
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
