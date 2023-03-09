// Write your code here
// Create a class for Breakfast
class Breakfast {
	// Breakfast will have a constructor with a food and a drink
	constructor(food, drink) {
		this.food = food
		this.drink = drink
	}
}

// Create a class for Lunch
class Lunch {
	// Lunch will have a constructor with a salad, a soup, and a drink
	constructor(salad, soup, drink) {
		this.salad = salad
		this.soup = soup
		this.drink = drink
	}
}

// Create a class for Dinner
class Dinner {
	// Declare dessert as a private property by prefixing its name with #
	#dessert

	// Dinner will have a constructor with salad, soup, entree, and dessert
	constructor(salad, soup, entree, dessert) {
		this.salad = salad
		this.soup = soup
		this.entree = entree

		// Initialize dessert as a private property by assigning it to #dessert
		this.#dessert = dessert
	}
}
