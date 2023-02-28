import { createFeatureSelector , createSelector } from "@ngrx/store";
import { CoffeeState } from "../coffee.state";

export const selectProducts = createFeatureSelector<CoffeeState>("products");

export const selectCoffeeDetails = createSelector(
  selectProducts,
  (state: CoffeeState) => state.coffeeDetails
);