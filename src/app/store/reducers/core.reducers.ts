import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import {State} from "../core.state";
import * as coffeeReducer from "../reducers/coffee.reducers"


export const reducers: ActionReducerMap<State> = {
    products: coffeeReducer.reducer
  };
  
export const metaReducers: MetaReducer<State>[] = [];
