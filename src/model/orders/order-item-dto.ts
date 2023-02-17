import {PriceDto} from '../money/price-dto';

export interface OrderItemDto {
  /** The id of the product in the external system. */
  productId?: string;
  /** The name of the product. */
  name?: string;
  /** The sku of the product. */
  sku?: string;
  /** The amount of the product. */
  amount: number;
  /** The price for a single item of the product. */
  singlePrice: PriceDto;
}
