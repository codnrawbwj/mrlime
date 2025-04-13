export type IngredientInsertDto = {
  name: string;
  type: 'juice' | 'syrup' | 'alcohol' | 'garnish' | 'carbonated' | 'others';
  imageURL: string;
  description: string;
  isMainAlcohol?: boolean;
};
