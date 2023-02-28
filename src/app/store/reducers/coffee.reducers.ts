import { Action, createReducer, on } from "@ngrx/store";
import { CoffeeState, initialCoffeeDetailsState } from "../coffee.state";
import * as coffeeActions from "../actions/coffee.actions"

const coffeeReducer = createReducer(
    initialCoffeeDetailsState,
    on(coffeeActions.CoffeeActionsSuccess, (state, action) => ({
      ...state,
      coffeeDetails: action.data
    }))
  );
  
  export function reducer(state: CoffeeState | undefined, action: Action) {
    return coffeeReducer(state, action);
  }