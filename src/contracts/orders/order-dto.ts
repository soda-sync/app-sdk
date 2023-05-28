import {ShipmentDto} from '../shipments/model/shipment-dto';
import {CustomerDto} from './customer-dto';
import {OrderStatus} from './order-status';
import {OrderItemDto} from './order-item-dto';
import {OrderTransactionDto} from './order-transaction-dto';
import {AddressDto} from './address-dto';
import {AttributeValues} from "../common/model/attribute-values-type";
import {DateTimeString} from "../../sdk/types";

export interface OrderDto {
    /** The id of the order in the external system. */
    id: string;

    /** The order number. */
    orderNumber: string;

    /** The date when the customer placed the order. */
    orderDate: DateTimeString;

    /** Details about the customer. */
    customer?: CustomerDto;

    /** The invoice address. **/
    invoiceAddress?: AddressDto;

    /** The delivery address. **/
    deliveryAddress?: AddressDto;

    /** The ordered items. */
    items: OrderItemDto[];

    /** Shipments related to the order. */
    shipments: ShipmentDto[];

    /** The status of the order. */
    status: OrderStatus;

    /** Transactions related to the order. */
    transactions: OrderTransactionDto[];

    attributeValues?: AttributeValues;
}
