import {PriceDto} from './price-dto';
import {OrderTransactionType} from './order-transaction-type';

export interface OrderTransactionDto {
  id?: Nullable<string>;
  type: OrderTransactionType;
  method: string;
  amount: PriceDto;
}
