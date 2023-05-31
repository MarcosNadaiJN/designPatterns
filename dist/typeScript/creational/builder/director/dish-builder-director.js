"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishBuilderDirector = void 0;
const main_dish_builder_1 = require("../classes/main-dish-builder");
const vegan_dish_builder_1 = require("../classes/vegan-dish-builder");
class DishBuilderDirector {
    constructMeal() {
        const mainDishBuilder = new main_dish_builder_1.MainDishBuilder();
        return mainDishBuilder.makeMeal().makeBeverage().makeDessert().getMeal();
    }
    constructVeganMeal() {
        const veganDishBuilder = new vegan_dish_builder_1.VeganDishBuilder();
        return veganDishBuilder.makeMeal().makeSalad().getMeal();
    }
}
exports.DishBuilderDirector = DishBuilderDirector;
//# sourceMappingURL=dish-builder-director.js.map