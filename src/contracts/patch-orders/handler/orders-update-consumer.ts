import {PatchOrdersRequest} from "../../orders/patch-orders-request";
import {OrderDto} from "../../orders/order-dto";

/**
 * Implement this interface for APIs that can receive order updates.
 */
export interface OrdersUpdateConsumer {

    /**
     * Updates a set of orders.
     *
     * @remarks
     * The request contain filters. All orders that match against all filters are updated.
     *
     * @example
     * Request:
     * ```ts
     * {
     *     filters: [
     *         {field: 'status', operation: FilterOperation.Equal, value: 'OPEN'}
     *         {field: 'customer.vatId', operation: FilterOperation.NotEqual, value: ''}
     *     ],
     *     fields: [
     *         {field: 'customer.vatId', operation: PatchOperation.Remove}
     *     ]
     * }
     * ```
     *
     * This request will remove the vatId of the customer in orders (fields) that match against these filters:
     * ```
     * - Filter 1: status == 'OPEN'
     *   AND
     * - Filter 2: vatId != ''
     * ```
     *
     * If the data in the external system contains:
     * ```
     * | Order # | Status    | Customer VatId. |
     * | ------- | --------- | --------------- |
     * | ORD#1   | OPEN      |                 |
     * | ORD#2   | OPEN      | DE123456789     |
     * | ORD#3   | COMPLETED |                 |
     * | ORD#4   | COMPLETED | DE123456789     |
     * | ORD#5   | OPEN      | DE987654321     |
     * ```
     *
     * The request would match against ORD#2 and ORD#5
     *
     * But NOT against:
     * ```
     * - ORD#1 because VatId. is empty
     * - ORD#3 because status != 'OPEN' and VatId. is empty
     * - ORD#4 because status != 'OPEN'
     * ```
     *
     * @param request - The request that contain details for patching orders
     *
     * @returns The list of patched orders
     */
    updateOrders(request: PatchOrdersRequest): Promise<OrderDto[]>;
}
