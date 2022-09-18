import {PriceDto} from './price-dto';
import {OrderTransactionTypeEnum} from './order-transaction-type-enum';

export interface OrderTransactionDto {
  id?: string;
  type: OrderTransactionTypeEnum;
  method: string;
  amount: PriceDto;
}
