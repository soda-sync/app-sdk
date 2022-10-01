import {PriceDto} from './price-dto';

export interface OrderItemDto {
  productId?: Nullable<string>;
  name?: Nullable<string>;
  sku?: Nullable<string>;
  amount: number;
  singlePrice: PriceDto;
}
