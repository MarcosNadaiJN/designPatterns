"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeganDishBuilder = void 0;
const meal_box_1 = require("./meal-box");
const meals_1 = require("./meals");
class VeganDishBuilder {
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
        this.meal.add(rice, beans);
        return this;
    }
    makeSalad() {
        const salad = new meals_1.Salad("Salada", 8);
        this.meal.add(salad);
        return this;
    }
    getMeal() {
        return this.meal;
    }
    getPrice() {
        return this.meal.getPrice();
    }
}
exports.VeganDishBuilder = VeganDishBuilder;
//# sourceMappingURL=vegan-dish-builder.js.map