"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_builder_director_1 = require("./typeScript/creational/builder/director/dish-builder-director");
const director = new dish_builder_director_1.DishBuilderDirector();
console.log(director.constructMeal());
console.log(director.constructVeganMeal());
console.log("");
//# sourceMappingURL=index.js.map