import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
        path: ':id',
        component: RecipeDetailsComponent
      }
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
