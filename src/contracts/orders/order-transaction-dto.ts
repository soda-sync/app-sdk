import {OrderTransactionType} from './order-transaction-type';
import {AttributeValues} from "../common/model/attribute-values-type";
import {DateTimeString} from "../../sdk/types";
import {MoneyDto} from "../money/model/money-dto";

export interface OrderTransactionDto {
  /** The id of the transaction */
  id?: string;

  /** The date of this transaction */
  date: DateTimeString;

  /** The transaction type. */
  type: OrderTransactionType;

  /** The method. */
  method: string;

  /** The amount of this transaction. */
  amount: MoneyDto;

  attributeValues?: AttributeValues;
}