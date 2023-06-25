export interface Category {
  ID?: string;
  name: string;
  available: boolean;
  items: MenuItem[];
  sortOrder: number;
  categoryType?: number;
}

export interface MenuItem {
  ID: string;
  name: string;
  available: boolean;
  priceInMinorUnit: number;
  description?: string;
  imgHref: string;
  modifierGroups: ModifierGroup[];
  priceV2: PriceV2;
  discountedPriceV2: PriceV2;
  thumbImages: string[];
  images: string[];
}

export interface ModifierGroup {
  ID: string;
  name: string;
  available: boolean;
  selectionRangeMin: number;
  selectionRangeMax: number;
  modifiers: ItemModifier[];
}
export interface ItemModifier {
  ID: string;
  name: string;
  available: boolean;
  sortOrder: number;
  priceV2: PriceV2;
  metadata: string;
}

export interface PriceV2 {
  amountDisplay: string;
  amountInMinor?: number;
}
