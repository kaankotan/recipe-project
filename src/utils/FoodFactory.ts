export type Food = {
  name: string,
  variations: string[] | null,
  selectedVariation: string | null,
  keywords: string[],
  amount: number | null,
  amountType: string | null
}

export const Tomato: Food = {
  name: 'Tomato',
  variations: null,
  selectedVariation: null,
  keywords: ['tomato', 'tomatoes'],
  amount: null,
  amountType: 'piece'
}

export const Potato: Food = {
  name: 'Potato',
  variations: null,
  selectedVariation: null,
  keywords: ['potato', 'potatoes'],
  amount: null,
  amountType: 'piece'
}

export const Flour: Food = {
  name: 'Flour',
  variations: null,
  selectedVariation: null,
  keywords: ['flour'],
  amount: null,
  amountType: 'grams'
}

export const Water: Food = {
  name: 'Water',
  variations: null,
  selectedVariation: null,
  keywords: ['water'],
  amount: null,
  amountType: 'ml'
}

export const Corn: Food = {
  name: 'Corn',
  variations: null,
  selectedVariation: null,
  keywords: ['corn', 'corns'],
  amount: null,
  amountType: 'grams'
}

export const Cheese: Food = {
  name: 'Cheese',
  variations: null,
  selectedVariation: null,
  keywords: ['cheese'],
  amount: null,
  amountType: 'grams'
}

export const Milk: Food = {
  name: 'Milk',
  variations: null,
  selectedVariation: null,
  keywords: ['milk'],
  amount: null,
  amountType: 'ml'
}

export const Vinegar: Food = {
  name: 'Vinegar',
  variations: null,
  selectedVariation: null,
  keywords: ['vinegar'],
  amount: null,
  amountType: 'ml'
}

export const Rice: Food = {
  name: 'Rice',
  variations: null,
  selectedVariation: null,
  keywords: ['rice'],
  amount: null,
  amountType: 'grams'
}

export const Oil: Food = {
  name: 'Oil',
  variations: ['any', 'olive', 'sunflower'],
  selectedVariation: null,
  keywords: ['oil'],
  amount: null,
  amountType: 'ml'
}

export const Butter: Food = {
  name: 'Butter',
  variations: null,
  selectedVariation: null,
  keywords: ['butter'],
  amount: null,
  amountType: 'ml'
}

export const Egg: Food = {
  name: 'Egg',
  variations: null,
  selectedVariation: null,
  keywords: ['egg'],
  amount: null,
  amountType: 'piece'
}

export const Salt: Food = {
  name: 'Salt',
  variations: null,
  selectedVariation: null,
  keywords: ['salt'],
  amount: null,
  amountType: 'grams'
}

export const Pepper: Food = {
  name: 'Pepper',
  variations: null,
  selectedVariation: null,
  keywords: ['pepper'],
  amount: null,
  amountType: 'grams'
}

export const Paprika: Food = {
  name: 'Paprika',
  variations: null,
  selectedVariation: null,
  keywords: ['paprika'],
  amount: null,
  amountType: 'grams'
}

export const Chicken: Food = {
  name: 'Chicken',
  variations: null,
  selectedVariation: null,
  keywords: ['chiken'],
  amount: null,
  amountType: 'Kilo'
}

export const Beef: Food = {
  name: 'Beef',
  variations: null,
  selectedVariation: null,
  keywords: ['beef'],
  amount: null,
  amountType: 'Kilo'
}

export const Onion: Food = {
  name: 'Onion',
  variations: null,
  selectedVariation: null,
  keywords: ['onion'],
  amount: null,
  amountType: 'piece'
}

export const ingredients = [Tomato, Potato, Flour, Oil, Rice, Butter, Cheese, Corn, Milk, Vinegar, Water,
Egg, Salt, Pepper, Paprika,Chicken, Beef, Onion, ]

