import {PriceDto} from './price-dto';
import {OrderShipmentDto} from './order-shipment-dto';
import {BuyerDto} from './buyer-dto';
import {OrderStatusEnum} from './order-status-enum';
import {OrderItemDto} from './order-item-dto';
import {OrderTransactionDto} from './order-transaction-dto';
import {AddressDto} from './address-dto';

export interface OrderDto {
  id: string;
  orderNumber: string;
  currencyCode?: string;
  shipCost?: PriceDto;
  shipments: OrderShipmentDto[];
  invoiceAddress?: AddressDto;
  deliveryAddress?: AddressDto;
  orderDate: Date;
  payDate?: Date;
  buyer?: BuyerDto;
  status: OrderStatusEnum;
  items: OrderItemDto[];
  transactions: OrderTransactionDto[];
}
