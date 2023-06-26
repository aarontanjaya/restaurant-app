import { MenuItem, ModifierItem } from "@/components/entity";
export function getNumberOrDefault(input: number | undefined): number {
  return input ? input : 0;
}

export function getItemPrice(
  item: MenuItem,
  modifiers: ModifierItem[]
): number {
  let price: number =
    item.priceV2 && item.priceV2.amountInMinor ? item.priceV2.amountInMinor : 0;
  if (item.discountedPriceV2 && item.discountedPriceV2.amountInMinor) {
    price = item.discountedPriceV2.amountInMinor;
  }

  modifiers.forEach((item) => {
    price += item ? getNumberOrDefault(item.priceV2.amountInMinor) : 0;
  });

  return price / 100;
}
