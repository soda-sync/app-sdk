import {ZShipmentDto} from '../shipments/model/shipment-dto';
import {ZCustomerDto} from './customer-dto';
import {ZOrderStatus} from './order-status';
import {ZOrderItemDto} from './order-item-dto';
import {ZOrderTransactionDto} from './order-transaction-dto';
import {ZAddressDto} from './address-dto';
import {ZAttributeValues} from "../common/model/attribute-values-type";
import {ZDateTimeString} from "../../sdk/types";
import {ZPaymentStatus} from "./payment-status";
import {z} from "zod";

export const ZOrderDto = z.object({
    /* The id of the order in the external system. */
    id: z.string(),
    /* The order number. */
    orderNumber: z.string(),
    /* The date when the customer placed the order. */
    orderDate: ZDateTimeString,
    /* Details about the customer. */
    customer: ZCustomerDto.optional(),
    /* The invoice address. */
    invoiceAddress: ZAddressDto.optional(),
    /* The delivery address. */
    deliveryAddress: ZAddressDto.optional(),
    /* The ordered items. */
    items: z.array(ZOrderItemDto).default([]),
    /* Shipments related to the order. */
    shipments: z.array(ZShipmentDto).default([]),
    /* The status of the order. */
    status: ZOrderStatus,
    /* The status of the payment. */
    paymentStatus: ZPaymentStatus,
    /* Transactions related to the order. */
    transactions: z.array(ZOrderTransactionDto).default([]),
    attributeValues: ZAttributeValues,
});

export type OrderDto = z.infer<typeof ZOrderDto>;
export type RawOrderDto = z.input<typeof ZOrderDto>;
