"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealBox = void 0;
class MealBox {
    constructor() {
        this._children = [];
    }
    getPrice() {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }
    add(...meal) {
        meal.forEach((meal) => this._children.push(meal));
    }
}
exports.MealBox = MealBox;
//# sourceMappingURL=meal-box.js.map