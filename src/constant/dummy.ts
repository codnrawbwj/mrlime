export interface CocktailType {
  _id: string;
  name: string;
  alcoholPercent: number;
  tasteReview: string;
  pictureURL: string;
  ingredients: string[];
  tasteLabel: ("sweet" | "fresh" | "deep" | "bitter" | "classic")[];
  recipe: string[];
}

export const COCKTAIL_HASH: CocktailType[] = [
  {
    _id: "1",
    name: "Margarita",
    alcoholPercent: 33,
    tasteReview:
      "A balanced mix of sweet and tart, with a refreshing citrus kick.",
    pictureURL: "/margarita_image.jpeg",
    ingredients: ["Tequila", "Lime juice", "Triple sec"],
    tasteLabel: ["sweet", "fresh"],
    recipe: [
      "1. Combine 1.5 oz (45ml) tequila, 1 oz (30ml) lime juice, and 0.75 oz (22ml) triple sec in a shaker with ice.",
      "2. Shake well until chilled.",
      "3. Strain into a salt-rimmed glass.",
    ],
  },
  {
    _id: "2",
    name: "Mojito",
    alcoholPercent: 13,
    tasteReview: "A refreshing and vibrant cocktail with a minty coolness.",
    pictureURL: "/mojito-image.jpeg",
    ingredients: ["Rum", "Lime juice", "Mint", "Sugar", "Soda water"],
    tasteLabel: ["fresh"],
    recipe: [
      "1. Muddle 6-8 mint leaves and 2 tsp sugar in a glass.",
      "2. Add 2 oz (60ml) rum and 1 oz (30ml) lime juice.",
      "3. Fill the glass with ice and top with soda water.",
    ],
  },
  {
    _id: "3",
    name: "Old Fashioned",
    alcoholPercent: 32,
    tasteReview: "A rich and complex cocktail with a strong whiskey flavor.",
    pictureURL: "/oldFasioned_image.jpeg",
    ingredients: ["Bourbon whiskey", "Sugar", "Angostura bitters"],
    tasteLabel: ["deep", "bitter"],
    recipe: [
      "1. Muddle 1 tsp sugar and 2 dashes Angostura bitters in a glass.",
      "2. Add 2 oz (60ml) bourbon whiskey and ice.",
      "3. Stir well and garnish with an orange peel.",
    ],
  },
  {
    _id: "4",
    name: "Manhattan",
    alcoholPercent: 30,
    tasteReview:
      "A bold and sophisticated cocktail with a strong whiskey presence.",
    pictureURL: "/manhattan_image.jpeg",
    ingredients: ["Whiskey", "Sweet vermouth", "Angostura bitters"],
    tasteLabel: ["classic", "deep", "bitter"],
    recipe: [
      "1. Combine 2 oz (60ml) whiskey, 1 oz (30ml) sweet vermouth, and 2 dashes Angostura bitters in a mixing glass with ice.",
      "2. Stir well until chilled.",
      "3. Strain into a chilled glass and garnish with a cherry.",
    ],
  },
  {
    _id: "5",
    name: "Martini",
    alcoholPercent: 32,
    tasteReview: "A classic and dry cocktail with a clean and crisp taste.",
    pictureURL: "/martini_image.jpeg",
    ingredients: ["Gin or Vodka", "Dry vermouth"],
    tasteLabel: ["classic", "bitter"],
    recipe: [
      "1. Combine 2 oz (60ml) gin or vodka and 0.5 oz (15ml) dry vermouth in a mixing glass with ice.",
      "2. Stir well until chilled.",
      "3. Strain into a chilled glass and garnish with an olive.",
    ],
  },
  {
    _id: "6",
    name: "Cosmopolitan",
    alcoholPercent: 27,
    tasteReview: "A fruity and vibrant cocktail with a tart cranberry flavor.",
    pictureURL: "/cosmopolitan_image.jpeg",
    ingredients: ["Vodka", "Cranberry juice", "Lime juice", "Triple sec"],
    tasteLabel: ["sweet", "fresh"],
    recipe: [
      "1. Combine 1.5 oz (45ml) vodka, 1 oz (30ml) cranberry juice, 0.5 oz (15ml) lime juice, and 0.5 oz (15ml) triple sec in a shaker with ice.",
      "2. Shake well until chilled.",
      "3. Strain into a chilled glass and garnish with an orange peel.",
    ],
  },
  {
    _id: "7",
    name: "Pina Colada",
    alcoholPercent: 13,
    tasteReview:
      "A creamy and tropical cocktail with a sweet pineapple and coconut flavor.",
    pictureURL: "/pinaColada_image.jpeg",
    ingredients: ["Rum", "Pineapple juice", "Coconut cream"],
    tasteLabel: ["sweet"],
    recipe: [
      "1. Combine 2 oz (60ml) rum, 3 oz (90ml) pineapple juice, and 1.5 oz (45ml) coconut cream in a blender with ice.",
      "2. Blend until smooth.",
      "3. Pour into a glass and garnish with a pineapple wedge.",
    ],
  },
  {
    _id: "8",
    name: "Daiquiri",
    alcoholPercent: 25,
    tasteReview: "A simple and refreshing cocktail with a tart lime flavor.",
    pictureURL: "/daiquiri_image.jpeg",
    ingredients: ["Rum", "Lime juice", "Sugar"],
    tasteLabel: ["fresh", "sweet"],
    recipe: [
      "1. Combine 2 oz (60ml) rum, 1 oz (30ml) lime juice, and 0.75 oz (22ml) sugar in a shaker with ice.",
      "2. Shake well until chilled.",
      "3. Strain into a chilled glass and garnish with a lime wedge.",
    ],
  },
  {
    _id: "9",
    name: "Bloody Mary",
    alcoholPercent: 10,
    tasteReview: "A savory and spicy cocktail with a tomato-based flavor.",
    pictureURL: "/bloodyMary_image.jpeg",
    ingredients: [
      "Vodka",
      "Tomato juice",
      "Lemon juice",
      "Worcestershire sauce",
      "Tabasco sauce",
    ],
    tasteLabel: ["bitter", "deep"],
    recipe: [
      "1. Combine 1.5 oz (45ml) vodka, 3 oz (90ml) tomato juice, 0.5 oz (15ml) lemon juice, 2 dashes Worcestershire sauce, and 2 dashes Tabasco sauce in a glass with ice.",
      "2. Stir well.",
      "3. Garnish with a celery stalk and other savory ingredients.",
    ],
  },
  {
    _id: "10",
    name: "Moscow Mule",
    alcoholPercent: 16,
    tasteReview: "A zesty and refreshing cocktail with a ginger kick.",
    pictureURL: "/moscowMule_image.jpeg",
    ingredients: ["Vodka", "Lime juice", "Ginger beer"],
    tasteLabel: ["fresh", "bitter"],
    recipe: [
      "1. Combine 1.5 oz (45ml) vodka and 0.5 oz (15ml) lime juice in a glass with ice.",
      "2. Fill the glass with ginger beer.",
      "3. Garnish with a lime wedge.",
    ],
  },
];
