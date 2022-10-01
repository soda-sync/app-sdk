import {PriceDto} from './price-dto';
import {OrderShipmentDto} from './order-shipment-dto';
import {BuyerDto} from './buyer-dto';
import {OrderStatus} from './order-status';
import {OrderItemDto} from './order-item-dto';
import {OrderTransactionDto} from './order-transaction-dto';
import {AddressDto} from './address-dto';
import {DateTimeString} from '../sdk';

export interface OrderDto {
  id: string;
  orderNumber: string;
  currencyCode?: Nullable<string>;
  shipCost?: Nullable<PriceDto>;
  shipments: OrderShipmentDto[];
  invoiceAddress?: Nullable<AddressDto>;
  deliveryAddress?: Nullable<AddressDto>;
  orderDate: DateTimeString;
  payDate?: Nullable<DateTimeString>;
  buyer?: Nullable<BuyerDto>;
  status: OrderStatus;
  items: OrderItemDto[];
  transactions: OrderTransactionDto[];
}
