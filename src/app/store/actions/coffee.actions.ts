import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee.model";

export enum ActionTypes {
    APICall = '[GET Coffee] List of coffee',
    Success = '[GET Coffee Success] List of coffee',
    Failed = '[GET Coffee Failed] List of coffee',
  }

export const CoffeeActions = createAction(
    ActionTypes.APICall, 
    props<{ limit: number }>()
)
export const CoffeeActionsSuccess = createAction(
    ActionTypes.Success, 
    props<{ data: Coffee[] }>()
)

export const CoffeeActionsFails = createAction(
    ActionTypes.Failed, 
    props<{ error: string }>()
)