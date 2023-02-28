import { Coffee } from "../models/coffee.model";

export interface CoffeeState{
    coffeeDetails: Coffee[];
}

export const initialCoffeeDetailsState: CoffeeState = {
    coffeeDetails: []
};