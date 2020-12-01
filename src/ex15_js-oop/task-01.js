function Dessert(name, brand) {
    this.name = name;
    this.brand = brand;
}

function Cookie(name, brand, shape, weight) {
    Dessert.apply(this, [name, brand]);
    this.shape = shape;
    this.weight = weight;
}

function ChocolateBar(name, brand, topping, weight) {
    Dessert.apply(this, [name, brand]);
    this.topping = topping;
    this.weight = weight;
}

function Candie(name, brand, shape, taste, weight) {
    Dessert.apply(this, [name, brand]);
    this.shape = shape;
    this.taste = taste;
    this.weight = weight;
}

function Marmalade(name, brand, color, taste, weight) {
    Dessert.apply(this, [name, brand]);
    this.color = color;
    this.taste = taste;
    this.weight = weight;
}

function Present(...dessert) {
    this.dessert = [...dessert];
    this.weight = function() {
        return this.dessert.reduce((weight, elem) => weight + elem.weight, 0);
    }
    this.sortByBrand = function(brand) {
        return this.dessert.filter(elem => elem.brand === brand);
    }
    this.sortByName = function(name) {
        return this.dessert.filter(elem => elem.name === name);
      }
}

Cookie.prototype = Object.create(Dessert.prototype);
const cookieMushrooms = new Cookie("ChocoBoy", "Orion", "mushroom", 45);

ChocolateBar.prototype = Object.create(Dessert.prototype);
const milkaOreo = new ChocolateBar("Milka", "Kraft Foods", "cookie", 92);
const milkaStrawberry = new ChocolateBar("Milka", "Kraft Foods", "strawberry yogurt", 100);

Candie.prototype = Object.create(Dessert.prototype);
const lolliCandieStick = new Candie("Lolli", "Country of candies", "stick", "lemon", 70);
const lolliCandieHeart = new Candie("Lolli", "Country of candies", "heart", "cherry", 30);
const lolliCandieRound = new Candie("Lolli", "Country of candies", "round", "wild berries", 70);

Marmalade.prototype = Object.create(Dessert.prototype);
const ballaStixxApple = new Marmalade("Balla Stixx", "Haribo", "green", "apple", 200);
const ballaStixxCola = new Marmalade("Balla Stixx", "Haribo", "brown", "cola", 300);

const newYearPresent = new Present(cookieMushrooms, milkaOreo, milkaStrawberry, lolliCandieStick, lolliCandieHeart, lolliCandieRound, ballaStixxApple, ballaStixxCola);
