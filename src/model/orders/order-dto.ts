import {PriceDto} from '../money/price-dto';
import {ShipmentDto} from '../shipments/shipment-dto';
import {BuyerDto} from './buyer-dto';
import {OrderStatus} from './order-status';
import {OrderItemDto} from './order-item-dto';
import {OrderTransactionDto} from './order-transaction-dto';
import {AddressDto} from './address-dto';
import {DateTimeString} from '../sdk/types';

export interface OrderDto {
  /** The id of the order in the external system. */
  id: string;
  /** The order number. */
  orderNumber: string;
  /** A 3 letter ISO 4217 currency code. */
  currencyCode?: string;
  /** The ship cost. */
  shipCost?: PriceDto;
  /** Shipments related to the order. */
  shipments: ShipmentDto[];
  /** The invoice address. **/
  invoiceAddress?: AddressDto;
  /** The delivery address. **/
  deliveryAddress?: AddressDto;
  /** The date when the customer placed the order. */
  orderDate: DateTimeString;
  /** The date when the customer paid the order. */
  payDate?: DateTimeString;
  /** Details about the buyer. */
  buyer?: BuyerDto;
  /** The status of the order. */
  status: OrderStatus;
  /** The ordered items. */
  items: OrderItemDto[];
  /** Transactions related to the order. */
  transactions: OrderTransactionDto[];
}
