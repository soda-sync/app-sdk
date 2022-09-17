import {PriceDto} from './price-dto';

export interface OrderItemDto {
  productId?: string;
  name?: string;
  sku?: string;
  amount: number;
  singlePrice: PriceDto;
}
