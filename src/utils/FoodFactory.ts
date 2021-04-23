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
  amount: 0,
  amountType: 'kg'
}

export const Potato: Food = {
  name: 'Potato',
  variations: null,
  selectedVariation: null,
  keywords: ['potato', 'potatoes'],
  amount: 0,
  amountType: 'kg'
}

export const Flour: Food = {
  name: 'Flour',
  variations: null,
  selectedVariation: null,
  keywords: ['flour'],
  amount: 0,
  amountType: 'grams'
}

export const Water: Food = {
  name: 'Water',
  variations: null,
  selectedVariation: null,
  keywords: ['water'],
  amount: 0,
  amountType: 'ml'
}

export const Corn: Food = {
  name: 'Corn',
  variations: null,
  selectedVariation: null,
  keywords: ['corn', 'corns'],
  amount: 0,
  amountType: 'grams'
}

export const Cheese: Food = {
  name: 'Cheese',
  variations: null,
  selectedVariation: null,
  keywords: ['cheese'],
  amount: 0,
  amountType: 'grams'
}

export const Milk: Food = {
  name: 'Milk',
  variations: null,
  selectedVariation: null,
  keywords: ['milk'],
  amount: 0,
  amountType: 'ml'
}

export const Vinegar: Food = {
  name: 'Vinegar',
  variations: null,
  selectedVariation: null,
  keywords: ['vinegar'],
  amount: 0,
  amountType: 'ml'
}

export const Rice: Food = {
  name: 'Rice',
  variations: null,
  selectedVariation: null,
  keywords: ['rice'],
  amount: 0,
  amountType: 'grams'
}

export const Oil: Food = {
  name: 'Oil',
  variations: ['any', 'olive', 'sunflower'],
  selectedVariation: null,
  keywords: ['oil'],
  amount: 0,
  amountType: 'ml'
}

export const Butter: Food = {
  name: 'Butter',
  variations: null,
  selectedVariation: null,
  keywords: ['butter'],
  amount: 0,
  amountType: 'ml'
}

export const ingredients = [Tomato, Potato, Flour, Oil, Rice, Butter, Cheese, Corn, Milk, Vinegar, Water]

