class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.soup = soup;
    this.salad = salad;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.soup = soup;
    this.salad = salad;
    this.entree = entree;
    this.#dessert = dessert;
  }
}