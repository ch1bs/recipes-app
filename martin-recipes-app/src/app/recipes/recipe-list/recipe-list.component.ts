import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test','https://p1.piqsels.com/preview/937/743/731/food-power-recipe-ingredient-pasta-tomato.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
