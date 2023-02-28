import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { CoffeeActions, CoffeeActionsFails, CoffeeActionsSuccess } from "../actions/coffee.actions";
import { HttpClient } from '@angular/common/http';
import { COFFEE_ENDPOINT } from "src/app/rest.const";
import { Coffee } from "../../models/coffee.model";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class CoffeeEffects {
    constructor(private actions$: Actions, private http:HttpClient){}

    getCoffee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoffeeActions),
            switchMap(action =>
                this.http.get<Coffee[]>(`${COFFEE_ENDPOINT}?size=${action.limit}`).pipe(
                    map(resp => CoffeeActionsSuccess({data: resp})),
                    catchError(err => of(CoffeeActionsFails(err)))
                )
            )));
}