import {PriceDto} from '../money/price-dto';
import {OrderTransactionType} from './order-transaction-type';

export interface OrderTransactionDto {
  /** The id of the transaction */
  id?: Nullable<string>;
  /** The transaction type. */
  type: OrderTransactionType;
  /** The method. */
  method: string;
  /** The amount of this transaction. */
  amount: PriceDto;
}
