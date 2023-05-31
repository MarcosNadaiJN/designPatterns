import { DishBuilderDirector } from "./typeScript/creational/builder/director/dish-builder-director";

const director = new DishBuilderDirector();

console.log(director.constructMeal());

console.log(director.constructVeganMeal());

console.log("");
