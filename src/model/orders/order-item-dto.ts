import {PriceDto} from '../money/price-dto';
import {Nullable} from '../../types';

export interface OrderItemDto {
  /** The id of the product in the external system. */
  productId?: Nullable<string>;
  /** The name of the product. */
  name?: Nullable<string>;
  /** The sku of the product. */
  sku?: Nullable<string>;
  /** The amount of the product. */
  amount: number;
  /** The price for a single item of the product. */
  singlePrice: PriceDto;
}
