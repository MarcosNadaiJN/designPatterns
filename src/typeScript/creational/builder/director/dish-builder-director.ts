import { MainDishBuilder } from "../classes/main-dish-builder";
import { VeganDishBuilder } from "../classes/vegan-dish-builder";

export class DishBuilderDirector {
  constructMeal() {
    const mainDishBuilder = new MainDishBuilder();
    return mainDishBuilder.makeMeal().makeBeverage().makeDessert().getMeal();
  }
  constructVeganMeal() {
    const veganDishBuilder = new VeganDishBuilder();
    return veganDishBuilder.makeMeal().makeSalad().getMeal();
  }
}
