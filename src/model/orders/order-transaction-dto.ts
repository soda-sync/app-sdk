import {PriceDto} from './price-dto';
import {OrderTransactionTypeEnum} from '@soda-sync/app-sdk/model';

export interface OrderTransactionDto {
  id?: string;
  type: OrderTransactionTypeEnum;
  method: string;
  amount: PriceDto;
}
