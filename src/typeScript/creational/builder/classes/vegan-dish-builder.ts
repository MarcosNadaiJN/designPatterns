import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Rice, Salad } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  reset(): this {
    this.meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijao", 10);
    this.meal.add(rice, beans);
    return this;
  }

  makeSalad(): this {
    const salad = new Salad("Salada", 8);
    this.meal.add(salad);
    return this;
  }

  getMeal(): MealBox {
    return this.meal;
  }

  getPrice(): number {
    return this.meal.getPrice();
  }
}
