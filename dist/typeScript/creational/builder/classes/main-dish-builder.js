"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDishBuilder = void 0;
const meal_box_1 = require("./meal-box");
const meals_1 = require("./meals");
class MainDishBuilder {
    constructor() {
        this.meal = new meal_box_1.MealBox();
    }
    reset() {
        this.meal = new meal_box_1.MealBox();
        return this;
    }
    makeMeal() {
        const rice = new meals_1.Rice("Arroz", 5);
        const beans = new meals_1.Beans("Feijao", 10);
        const meat = new meals_1.Meat("Carne", 15);
        this.meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage() {
        const beverage = new meals_1.Beverage("Bebida", 7);
        this.meal.add(beverage);
        return this;
    }
    makeDessert() {
        const dessert = new meals_1.Dessert("Sobremesa", 10);
        this.meal.add(dessert);
        return this;
    }
    getMeal() {
        return this.meal;
    }
    getPrice() {
        return this.meal.getPrice();
    }
}
exports.MainDishBuilder = MainDishBuilder;
//# sourceMappingURL=main-dish-builder.js.map